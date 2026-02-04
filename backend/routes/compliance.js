const express = require('express');
const verifyAdmin = require('../middleware/auth');
const router = express.Router();
const prisma = require('../lib/prisma');

// Get compliance overview
router.get('/overview', verifyAdmin, async (req, res) => {
    try {
        const { companyId } = req.query;

        const where = companyId ? { employee: { companyId } } : {};

        const [
            totalEnrollments,
            completedEnrollments,
            overdueEnrollments,
            inProgressEnrollments
        ] = await Promise.all([
            prisma.enrollment.count({ where }),
            prisma.enrollment.count({ where: { ...where, status: 'COMPLETED' } }),
            prisma.enrollment.count({ where: { ...where, status: 'OVERDUE' } }),
            prisma.enrollment.count({ where: { ...where, status: 'IN_PROGRESS' } })
        ]);

        const completionRate = totalEnrollments > 0
            ? ((completedEnrollments / totalEnrollments) * 100).toFixed(2)
            : 0;

        res.json({
            totalEnrollments,
            completedEnrollments,
            overdueEnrollments,
            inProgressEnrollments,
            completionRate: parseFloat(completionRate)
        });
    } catch (error) {
        console.error('[COMPLIANCE_OVERVIEW]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Get company compliance
router.get('/company/:companyId', verifyAdmin, async (req, res) => {
    try {
        const { companyId } = req.params;

        const company = await prisma.company.findUnique({
            where: { id: companyId },
            select: { name: true }
        });

        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }

        const [
            totalEmployees,
            totalEnrollments,
            completedEnrollments,
            overdueEnrollments
        ] = await Promise.all([
            prisma.employee.count({ where: { companyId, status: 'ACTIVE' } }),
            prisma.enrollment.count({ where: { employee: { companyId } } }),
            prisma.enrollment.count({
                where: { employee: { companyId }, status: 'COMPLETED' }
            }),
            prisma.enrollment.count({
                where: { employee: { companyId }, status: 'OVERDUE' }
            })
        ]);

        // Get program-wise compliance
        const programs = await prisma.trainingProgram.findMany({
            where: {
                companyPrograms: { some: { companyId } }
            },
            include: {
                _count: {
                    select: {
                        enrollments: {
                            where: { employee: { companyId } }
                        }
                    }
                }
            }
        });

        const completionRate = totalEnrollments > 0
            ? ((completedEnrollments / totalEnrollments) * 100).toFixed(2)
            : 0;

        res.json({
            company: company.name,
            totalEmployees,
            totalEnrollments,
            completedEnrollments,
            overdueEnrollments,
            completionRate: parseFloat(completionRate),
            programs
        });
    } catch (error) {
        console.error('[COMPLIANCE_COMPANY]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Get overdue trainings
router.get('/overdue', verifyAdmin, async (req, res) => {
    try {
        const { companyId, page = 1, limit = 50 } = req.query;

        const where = {
            status: 'OVERDUE',
            dueDate: { lt: new Date() }
        };

        if (companyId) {
            where.employee = { companyId };
        }

        const skip = (parseInt(page) - 1) * parseInt(limit);

        const [enrollments, total] = await Promise.all([
            prisma.enrollment.findMany({
                where,
                skip,
                take: parseInt(limit),
                orderBy: { dueDate: 'asc' },
                include: {
                    employee: {
                        select: {
                            firstName: true,
                            lastName: true,
                            email: true,
                            company: { select: { name: true } },
                            department: { select: { name: true } }
                        }
                    },
                    course: { select: { title: true } },
                    program: { select: { name: true } }
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
        console.error('[COMPLIANCE_OVERDUE]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Get role-wise compliance
router.get('/role/:jobRoleId', verifyAdmin, async (req, res) => {
    try {
        const { jobRoleId } = req.params;

        const jobRole = await prisma.jobRole.findUnique({
            where: { id: jobRoleId },
            include: { company: { select: { name: true } } }
        });

        if (!jobRole) {
            return res.status(404).json({ error: 'Job role not found' });
        }

        const [
            totalEmployees,
            totalEnrollments,
            completedEnrollments
        ] = await Promise.all([
            prisma.employee.count({ where: { jobRoleId, status: 'ACTIVE' } }),
            prisma.enrollment.count({ where: { employee: { jobRoleId } } }),
            prisma.enrollment.count({
                where: { employee: { jobRoleId }, status: 'COMPLETED' }
            })
        ]);

        const completionRate = totalEnrollments > 0
            ? ((completedEnrollments / totalEnrollments) * 100).toFixed(2)
            : 0;

        res.json({
            jobRole: jobRole.name,
            company: jobRole.company.name,
            totalEmployees,
            totalEnrollments,
            completedEnrollments,
            completionRate: parseFloat(completionRate)
        });
    } catch (error) {
        console.error('[COMPLIANCE_ROLE]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

module.exports = router;
