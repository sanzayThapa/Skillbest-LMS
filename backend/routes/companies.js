const express = require('express');
const verifyAdmin = require('../middleware/auth');
const router = express.Router();
const prisma = require('../lib/prisma');

// Get all companies with filters
router.get('/', verifyAdmin, async (req, res) => {
    try {
        const { status, industry, search, page = 1, limit = 50 } = req.query;

        const where = {};
        if (status) where.status = status;
        if (industry) where.industry = industry;
        if (search) {
            where.OR = [
                { name: { contains: search, mode: 'insensitive' } },
                { slug: { contains: search, mode: 'insensitive' } }
            ];
        }

        const skip = (parseInt(page) - 1) * parseInt(limit);

        const [companies, total] = await Promise.all([
            prisma.company.findMany({
                where,
                skip,
                take: parseInt(limit),
                orderBy: { createdAt: 'desc' },
                include: {
                    _count: {
                        select: {
                            employees: true,
                            departments: true,
                            trainingPrograms: true
                        }
                    }
                }
            }),
            prisma.company.count({ where })
        ]);

        res.json({
            companies,
            pagination: {
                total,
                page: parseInt(page),
                limit: parseInt(limit),
                totalPages: Math.ceil(total / parseInt(limit))
            }
        });
    } catch (error) {
        console.error('[COMPANIES_GET]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Get single company
router.get('/:id', verifyAdmin, async (req, res) => {
    try {
        const company = await prisma.company.findUnique({
            where: { id: req.params.id },
            include: {
                departments: true,
                teams: true,
                locations: true,
                jobRoles: true,
                subscriptions: {
                    include: { plan: true },
                    orderBy: { createdAt: 'desc' },
                    take: 1
                },
                _count: {
                    select: {
                        employees: true,
                        trainingPrograms: true
                    }
                }
            }
        });

        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }

        res.json(company);
    } catch (error) {
        console.error('[COMPANY_GET]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Create company
router.post('/', verifyAdmin, async (req, res) => {
    try {
        const {
            name,
            slug,
            logo,
            industry,
            status,
            contractStartDate,
            contractEndDate,
            employeeLimit,
            allowedDomains,
            customDomain,
            brandColor
        } = req.body;

        if (!name || !slug) {
            return res.status(400).json({ error: 'Name and slug are required' });
        }

        const company = await prisma.company.create({
            data: {
                name,
                slug,
                logo,
                industry,
                status,
                contractStartDate: contractStartDate ? new Date(contractStartDate) : null,
                contractEndDate: contractEndDate ? new Date(contractEndDate) : null,
                employeeLimit,
                allowedDomains: allowedDomains || [],
                customDomain,
                brandColor
            }
        });

        res.json(company);
    } catch (error) {
        console.error('[COMPANY_CREATE]', error);
        if (error.code === 'P2002') {
            return res.status(400).json({ error: 'Company slug already exists' });
        }
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Update company
router.patch('/:id', verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const data = { ...req.body };

        // Convert date strings to Date objects
        if (data.contractStartDate) data.contractStartDate = new Date(data.contractStartDate);
        if (data.contractEndDate) data.contractEndDate = new Date(data.contractEndDate);

        const company = await prisma.company.update({
            where: { id },
            data
        });

        res.json(company);
    } catch (error) {
        console.error('[COMPANY_UPDATE]', error);
        if (error.code === 'P2025') {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Delete company
router.delete('/:id', verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;

        const company = await prisma.company.delete({
            where: { id }
        });

        res.json(company);
    } catch (error) {
        console.error('[COMPANY_DELETE]', error);
        if (error.code === 'P2025') {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Bulk operations
router.post('/bulk', verifyAdmin, async (req, res) => {
    try {
        const { action, companyIds } = req.body;

        if (!action || !companyIds || !Array.isArray(companyIds)) {
            return res.status(400).json({ error: 'Invalid request' });
        }

        let result;

        switch (action) {
            case 'activate':
                result = await prisma.company.updateMany({
                    where: { id: { in: companyIds } },
                    data: { status: 'ACTIVE' }
                });
                break;
            case 'pause':
                result = await prisma.company.updateMany({
                    where: { id: { in: companyIds } },
                    data: { status: 'PAUSED' }
                });
                break;
            case 'delete':
                result = await prisma.company.deleteMany({
                    where: { id: { in: companyIds } }
                });
                break;
            default:
                return res.status(400).json({ error: 'Invalid action' });
        }

        res.json({ success: true, count: result.count });
    } catch (error) {
        console.error('[COMPANY_BULK]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

module.exports = router;
