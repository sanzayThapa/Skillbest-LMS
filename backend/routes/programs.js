const express = require('express');
const verifyAdmin = require('../middleware/auth');
const router = express.Router();
const prisma = require('../lib/prisma');

// Get all training programs
router.get('/', verifyAdmin, async (req, res) => {
    try {
        const { type, isActive, search, page = 1, limit = 50 } = req.query;

        const where = {};
        if (type) where.type = type;
        if (isActive !== undefined) where.isActive = isActive === 'true';
        if (search) {
            where.OR = [
                { name: { contains: search, mode: 'insensitive' } },
                { description: { contains: search, mode: 'insensitive' } }
            ];
        }

        const skip = (parseInt(page) - 1) * parseInt(limit);

        const [programs, total] = await Promise.all([
            prisma.trainingProgram.findMany({
                where,
                skip,
                take: parseInt(limit),
                orderBy: { createdAt: 'desc' },
                include: {
                    _count: {
                        select: {
                            courses: true,
                            companyPrograms: true,
                            enrollments: true
                        }
                    }
                }
            }),
            prisma.trainingProgram.count({ where })
        ]);

        res.json({
            programs,
            pagination: {
                total,
                page: parseInt(page),
                limit: parseInt(limit),
                totalPages: Math.ceil(total / parseInt(limit))
            }
        });
    } catch (error) {
        console.error('[PROGRAMS_GET]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Get single program
router.get('/:id', verifyAdmin, async (req, res) => {
    try {
        const program = await prisma.trainingProgram.findUnique({
            where: { id: req.params.id },
            include: {
                courses: {
                    include: {
                        course: {
                            select: {
                                id: true,
                                title: true,
                                description: true,
                                imageUrl: true
                            }
                        }
                    },
                    orderBy: { order: 'asc' }
                },
                companyPrograms: {
                    include: {
                        company: { select: { name: true, slug: true } }
                    }
                },
                rolePrograms: {
                    include: {
                        jobRole: { select: { name: true, level: true } }
                    }
                }
            }
        });

        if (!program) {
            return res.status(404).json({ error: 'Program not found' });
        }

        res.json(program);
    } catch (error) {
        console.error('[PROGRAM_GET]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Create program
router.post('/', verifyAdmin, async (req, res) => {
    try {
        const {
            name,
            description,
            type,
            version,
            isActive,
            isMandatory,
            validityPeriod
        } = req.body;

        if (!name || !type) {
            return res.status(400).json({ error: 'Name and type are required' });
        }

        const program = await prisma.trainingProgram.create({
            data: {
                name,
                description,
                type,
                version,
                isActive,
                isMandatory,
                validityPeriod
            }
        });

        res.json(program);
    } catch (error) {
        console.error('[PROGRAM_CREATE]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Update program
router.patch('/:id', verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const program = await prisma.trainingProgram.update({
            where: { id },
            data
        });

        res.json(program);
    } catch (error) {
        console.error('[PROGRAM_UPDATE]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Delete program
router.delete('/:id', verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;

        const program = await prisma.trainingProgram.delete({
            where: { id }
        });

        res.json(program);
    } catch (error) {
        console.error('[PROGRAM_DELETE]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Add course to program
router.post('/:id/courses', verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const { courseId, order } = req.body;

        if (!courseId) {
            return res.status(400).json({ error: 'Course ID is required' });
        }

        // Get the next order if not provided
        let courseOrder = order;
        if (!courseOrder) {
            const lastCourse = await prisma.programCourse.findFirst({
                where: { programId: id },
                orderBy: { order: 'desc' }
            });
            courseOrder = lastCourse ? lastCourse.order + 1 : 1;
        }

        const programCourse = await prisma.programCourse.create({
            data: {
                programId: id,
                courseId,
                order: courseOrder
            }
        });

        res.json(programCourse);
    } catch (error) {
        console.error('[PROGRAM_ADD_COURSE]', error);
        if (error.code === 'P2002') {
            return res.status(400).json({ error: 'Course already added to this program' });
        }
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Remove course from program
router.delete('/:programId/courses/:courseId', verifyAdmin, async (req, res) => {
    try {
        const { programId, courseId } = req.params;

        const programCourse = await prisma.programCourse.deleteMany({
            where: {
                programId,
                courseId
            }
        });

        res.json(programCourse);
    } catch (error) {
        console.error('[PROGRAM_REMOVE_COURSE]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Assign program to company
router.post('/:id/assign-company', verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const { companyId, dueDate } = req.body;

        if (!companyId) {
            return res.status(400).json({ error: 'Company ID is required' });
        }

        const companyProgram = await prisma.companyProgram.create({
            data: {
                programId: id,
                companyId,
                dueDate: dueDate ? new Date(dueDate) : null
            }
        });

        res.json(companyProgram);
    } catch (error) {
        console.error('[PROGRAM_ASSIGN_COMPANY]', error);
        if (error.code === 'P2002') {
            return res.status(400).json({ error: 'Program already assigned to this company' });
        }
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Assign program to job role
router.post('/:id/assign-role', verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const { jobRoleId } = req.body;

        if (!jobRoleId) {
            return res.status(400).json({ error: 'Job role ID is required' });
        }

        const roleProgram = await prisma.roleProgram.create({
            data: {
                programId: id,
                jobRoleId
            }
        });

        res.json(roleProgram);
    } catch (error) {
        console.error('[PROGRAM_ASSIGN_ROLE]', error);
        if (error.code === 'P2002') {
            return res.status(400).json({ error: 'Program already assigned to this role' });
        }
        res.status(500).json({ error: 'Internal Error' });
    }
});

module.exports = router;
