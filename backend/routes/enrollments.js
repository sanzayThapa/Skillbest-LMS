const express = require('express');
const verifyAdmin = require('../middleware/auth');
const router = express.Router();
const prisma = require('../lib/prisma');

// Get all enrollments with filters
router.get('/', verifyAdmin, async (req, res) => {
    try {
        const {
            employeeId,
            companyId,
            courseId,
            programId,
            status,
            page = 1,
            limit = 50
        } = req.query;

        const where = {};
        if (employeeId) where.employeeId = employeeId;
        if (courseId) where.courseId = courseId;
        if (programId) where.programId = programId;
        if (status) where.status = status;

        // Filter by company through employee relation
        if (companyId) {
            where.employee = { companyId };
        }

        const skip = (parseInt(page) - 1) * parseInt(limit);

        const [enrollments, total] = await Promise.all([
            prisma.enrollment.findMany({
                where,
                skip,
                take: parseInt(limit),
                orderBy: { createdAt: 'desc' },
                include: {
                    employee: {
                        select: {
                            firstName: true,
                            lastName: true,
                            email: true,
                            company: { select: { name: true } }
                        }
                    },
                    course: { select: { title: true } },
                    program: { select: { name: true, type: true } }
                }
            }),
            prisma.enrollment.count({ where })
        ]);

        res.json({
            enrollments,
            pagination: {
                total,
                page: parseInt(page),
                limit: parseInt(limit),
                totalPages: Math.ceil(total / parseInt(limit))
            }
        });
    } catch (error) {
        console.error('[ENROLLMENTS_GET]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Assign training (supports bulk)
router.post('/assign', verifyAdmin, async (req, res) => {
    try {
        const {
            employeeIds,
            companyId,
            departmentId,
            jobRoleId,
            courseId,
            programId,
            dueDate,
            assignedBy
        } = req.body;

        if (!courseId && !programId) {
            return res.status(400).json({ error: 'Either courseId or programId is required' });
        }

        let targetEmployeeIds = employeeIds || [];

        // If assigning to company, department, or role, get all employees
        if (companyId || departmentId || jobRoleId) {
            const where = {};
            if (companyId) where.companyId = companyId;
            if (departmentId) where.departmentId = departmentId;
            if (jobRoleId) where.jobRoleId = jobRoleId;

            const employees = await prisma.employee.findMany({
                where,
                select: { id: true }
            });

            targetEmployeeIds = employees.map(e => e.id);
        }

        if (targetEmployeeIds.length === 0) {
            return res.status(400).json({ error: 'No employees to assign' });
        }

        // Create enrollments
        const enrollments = await Promise.all(
            targetEmployeeIds.map(employeeId =>
                prisma.enrollment.upsert({
                    where: {
                        employeeId_courseId: courseId ? { employeeId, courseId } : undefined,
                        employeeId_programId: programId ? { employeeId, programId } : undefined
                    },
                    create: {
                        employeeId,
                        courseId,
                        programId,
                        dueDate: dueDate ? new Date(dueDate) : null,
                        assignedBy
                    },
                    update: {
                        dueDate: dueDate ? new Date(dueDate) : null,
                        assignedBy
                    }
                }).catch(err => null) // Skip if already exists
            )
        );

        const successCount = enrollments.filter(e => e !== null).length;

        res.json({
            success: true,
            count: successCount,
            total: targetEmployeeIds.length
        });
    } catch (error) {
        console.error('[ENROLLMENT_ASSIGN]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Update enrollment
router.patch('/:id', verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const data = { ...req.body };

        if (data.dueDate) data.dueDate = new Date(data.dueDate);
        if (data.startedAt) data.startedAt = new Date(data.startedAt);
        if (data.completedAt) data.completedAt = new Date(data.completedAt);

        const enrollment = await prisma.enrollment.update({
            where: { id },
            data
        });

        res.json(enrollment);
    } catch (error) {
        console.error('[ENROLLMENT_UPDATE]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Delete enrollment
router.delete('/:id', verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;

        const enrollment = await prisma.enrollment.delete({
            where: { id }
        });

        res.json(enrollment);
    } catch (error) {
        console.error('[ENROLLMENT_DELETE]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Mark enrollment as exempt
router.post('/:id/exempt', verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const { exemptReason } = req.body;

        const enrollment = await prisma.enrollment.update({
            where: { id },
            data: {
                isExempt: true,
                exemptReason
            }
        });

        res.json(enrollment);
    } catch (error) {
        console.error('[ENROLLMENT_EXEMPT]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

module.exports = router;
