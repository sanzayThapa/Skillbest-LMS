const express = require('express');
const verifyAdmin = require('../middleware/auth');
const router = express.Router();
const prisma = require('../lib/prisma');

// Get all employees with filters
router.get('/', verifyAdmin, async (req, res) => {
    try {
        const {
            companyId,
            departmentId,
            teamId,
            jobRoleId,
            status,
            search,
            page = 1,
            limit = 50
        } = req.query;

        const where = {};
        if (companyId) where.companyId = companyId;
        if (departmentId) where.departmentId = departmentId;
        if (teamId) where.teamId = teamId;
        if (jobRoleId) where.jobRoleId = jobRoleId;
        if (status) where.status = status;
        if (search) {
            where.OR = [
                { firstName: { contains: search, mode: 'insensitive' } },
                { lastName: { contains: search, mode: 'insensitive' } },
                { email: { contains: search, mode: 'insensitive' } },
                { employeeId: { contains: search, mode: 'insensitive' } }
            ];
        }

        const skip = (parseInt(page) - 1) * parseInt(limit);

        const [employees, total] = await Promise.all([
            prisma.employee.findMany({
                where,
                skip,
                take: parseInt(limit),
                orderBy: { createdAt: 'desc' },
                include: {
                    company: { select: { name: true, slug: true } },
                    department: { select: { name: true } },
                    team: { select: { name: true } },
                    jobRole: { select: { name: true, level: true } },
                    location: { select: { name: true, city: true } },
                    manager: { select: { firstName: true, lastName: true, email: true } }
                }
            }),
            prisma.employee.count({ where })
        ]);

        res.json({
            employees,
            pagination: {
                total,
                page: parseInt(page),
                limit: parseInt(limit),
                totalPages: Math.ceil(total / parseInt(limit))
            }
        });
    } catch (error) {
        console.error('[EMPLOYEES_GET]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Get single employee
router.get('/:id', verifyAdmin, async (req, res) => {
    try {
        const employee = await prisma.employee.findUnique({
            where: { id: req.params.id },
            include: {
                company: true,
                department: true,
                team: true,
                jobRole: true,
                location: true,
                manager: { select: { firstName: true, lastName: true, email: true } },
                reports: { select: { id: true, firstName: true, lastName: true, email: true } },
                enrollments: {
                    include: {
                        course: { select: { title: true } },
                        program: { select: { name: true } }
                    },
                    orderBy: { createdAt: 'desc' }
                },
                certificates: {
                    include: { course: { select: { title: true } } },
                    orderBy: { issuedDate: 'desc' }
                }
            }
        });

        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        res.json(employee);
    } catch (error) {
        console.error('[EMPLOYEE_GET]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Create employee
router.post('/', verifyAdmin, async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            phone,
            avatar,
            employeeId,
            companyId,
            departmentId,
            teamId,
            jobRoleId,
            locationId,
            managerId,
            status,
            hireDate
        } = req.body;

        if (!firstName || !lastName || !email || !companyId) {
            return res.status(400).json({ error: 'First name, last name, email, and company are required' });
        }

        const employee = await prisma.employee.create({
            data: {
                firstName,
                lastName,
                email,
                phone,
                avatar,
                employeeId,
                companyId,
                departmentId,
                teamId,
                jobRoleId,
                locationId,
                managerId,
                status,
                hireDate: hireDate ? new Date(hireDate) : null
            }
        });

        res.json(employee);
    } catch (error) {
        console.error('[EMPLOYEE_CREATE]', error);
        if (error.code === 'P2002') {
            return res.status(400).json({ error: 'Email already exists' });
        }
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Update employee
router.patch('/:id', verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const data = { ...req.body };

        // Convert date strings to Date objects
        if (data.hireDate) data.hireDate = new Date(data.hireDate);
        if (data.terminationDate) data.terminationDate = new Date(data.terminationDate);

        const employee = await prisma.employee.update({
            where: { id },
            data
        });

        res.json(employee);
    } catch (error) {
        console.error('[EMPLOYEE_UPDATE]', error);
        if (error.code === 'P2025') {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Delete employee
router.delete('/:id', verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;

        const employee = await prisma.employee.delete({
            where: { id }
        });

        res.json(employee);
    } catch (error) {
        console.error('[EMPLOYEE_DELETE]', error);
        if (error.code === 'P2025') {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Bulk import employees from CSV
router.post('/bulk-import', verifyAdmin, async (req, res) => {
    try {
        const { employees } = req.body;

        if (!employees || !Array.isArray(employees)) {
            return res.status(400).json({ error: 'Invalid request' });
        }

        const results = {
            success: 0,
            failed: 0,
            errors: []
        };

        for (const emp of employees) {
            try {
                await prisma.employee.create({
                    data: {
                        firstName: emp.firstName,
                        lastName: emp.lastName,
                        email: emp.email,
                        phone: emp.phone,
                        employeeId: emp.employeeId,
                        companyId: emp.companyId,
                        departmentId: emp.departmentId,
                        teamId: emp.teamId,
                        jobRoleId: emp.jobRoleId,
                        locationId: emp.locationId,
                        hireDate: emp.hireDate ? new Date(emp.hireDate) : null
                    }
                });
                results.success++;
            } catch (error) {
                results.failed++;
                results.errors.push({
                    email: emp.email,
                    error: error.message
                });
            }
        }

        res.json(results);
    } catch (error) {
        console.error('[EMPLOYEE_BULK_IMPORT]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Get employee learning history
router.get('/:id/learning-history', verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;

        const enrollments = await prisma.enrollment.findMany({
            where: { employeeId: id },
            include: {
                course: { select: { title: true, imageUrl: true } },
                program: { select: { name: true, type: true } }
            },
            orderBy: { createdAt: 'desc' }
        });

        res.json(enrollments);
    } catch (error) {
        console.error('[EMPLOYEE_LEARNING_HISTORY]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Get employee certificates
router.get('/:id/certificates', verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;

        const certificates = await prisma.certificate.findMany({
            where: { employeeId: id },
            include: {
                course: { select: { title: true } }
            },
            orderBy: { issuedDate: 'desc' }
        });

        res.json(certificates);
    } catch (error) {
        console.error('[EMPLOYEE_CERTIFICATES]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

module.exports = router;
