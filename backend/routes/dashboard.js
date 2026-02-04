const express = require('express');
const verifyAdmin = require('../middleware/auth');
const router = express.Router();
const prisma = require('../lib/prisma');

// Admin dashboard overview
router.get('/overview', verifyAdmin, async (req, res) => {
    try {
        const [
            totalCompanies,
            activeCompanies,
            totalEmployees,
            activeEmployees,
            totalEnrollments,
            completedEnrollments,
            overdueEnrollments,
            totalPrograms,
            totalCourses
        ] = await Promise.all([
            prisma.company.count(),
            prisma.company.count({ where: { status: 'ACTIVE' } }),
            prisma.employee.count(),
            prisma.employee.count({ where: { status: 'ACTIVE' } }),
            prisma.enrollment.count(),
            prisma.enrollment.count({ where: { status: 'COMPLETED' } }),
            prisma.enrollment.count({ where: { status: 'OVERDUE' } }),
            prisma.trainingProgram.count({ where: { isActive: true } }),
            prisma.course.count({ where: { isPublished: true } })
        ]);

        const complianceRate = totalEnrollments > 0
            ? ((completedEnrollments / totalEnrollments) * 100).toFixed(2)
            : 0;

        // Get recent activities
        const recentEnrollments = await prisma.enrollment.findMany({
            take: 10,
            orderBy: { createdAt: 'desc' },
            include: {
                employee: {
                    select: {
                        firstName: true,
                        lastName: true,
                        company: { select: { name: true } }
                    }
                },
                course: { select: { title: true } },
                program: { select: { name: true } }
            }
        });

        // Get companies with low compliance
        const companiesWithLowCompliance = await prisma.company.findMany({
            take: 5,
            include: {
                _count: {
                    select: { employees: true }
                }
            }
        });

        res.json({
            stats: {
                totalCompanies,
                activeCompanies,
                totalEmployees,
                activeEmployees,
                totalEnrollments,
                completedEnrollments,
                overdueEnrollments,
                totalPrograms,
                totalCourses,
                complianceRate: parseFloat(complianceRate)
            },
            recentActivities: recentEnrollments,
            companiesWithLowCompliance
        });
    } catch (error) {
        console.error('[DASHBOARD_OVERVIEW]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Get system alerts
router.get('/alerts', verifyAdmin, async (req, res) => {
    try {
        const alerts = [];

        // Check for companies nearing employee limit
        const companiesNearLimit = await prisma.company.findMany({
            where: {
                employeeLimit: { not: null }
            },
            include: {
                _count: { select: { employees: true } }
            }
        });

        companiesNearLimit.forEach(company => {
            const usage = (company._count.employees / company.employeeLimit) * 100;
            if (usage >= 90) {
                alerts.push({
                    type: 'WARNING',
                    message: `${company.name} is at ${usage.toFixed(0)}% of employee limit`,
                    companyId: company.id
                });
            }
        });

        // Check for expiring contracts
        const expiringContracts = await prisma.company.findMany({
            where: {
                contractEndDate: {
                    gte: new Date(),
                    lte: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days
                }
            }
        });

        expiringContracts.forEach(company => {
            alerts.push({
                type: 'INFO',
                message: `Contract for ${company.name} expires soon`,
                companyId: company.id,
                date: company.contractEndDate
            });
        });

        // Check for overdue trainings
        const overdueCount = await prisma.enrollment.count({
            where: { status: 'OVERDUE' }
        });

        if (overdueCount > 0) {
            alerts.push({
                type: 'CRITICAL',
                message: `${overdueCount} overdue training assignments`,
                link: '/admin/compliance/overdue'
            });
        }

        res.json(alerts);
    } catch (error) {
        console.error('[DASHBOARD_ALERTS]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

module.exports = router;
