const express = require('express');
const verifyAdmin = require('../middleware/auth');
const router = express.Router();
const prisma = require('../lib/prisma');

// --- Category Routes (Specific) ---

// Get all categories
router.get('/meta/categories', async (req, res) => {
    try {
        const categories = await prisma.category.findMany({
            orderBy: { name: 'asc' }
        });
        res.json(categories);
    } catch (error) {
        console.error('[CATEGORIES_GET]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Create category
router.post('/meta/categories', verifyAdmin, async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) return res.status(400).json({ error: "Name is required" });

        const category = await prisma.category.create({
            data: { name }
        });
        res.json(category);
    } catch (error) {
        console.error('[CATEGORY_POST]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// --- Course Routes ---

// Public courses for homepage/list
router.get('/public/all', async (req, res) => {
    try {
        const courses = await prisma.course.findMany({
            where: { isPublished: true },
            include: {
                category: true,
                user: {
                    select: { name: true, image: true, email: true }
                }
            },
            orderBy: { createdAt: 'desc' }
        });
        res.json(courses);
    } catch (error) {
        console.error('[PUBLIC_COURSES_GET]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Create a new course
router.post('/', verifyAdmin, async (req, res) => {
    try {
        const { title, userId } = req.body;
        if (!title) {
            return res.status(400).json({ error: "Title is required" });
        }

        const course = await prisma.course.create({
            data: {
                userId: req.user ? req.user.id : userId,
                title,
            },
        });
        res.json(course);
    } catch (error) {
        console.error('[COURSES_POST]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Get all courses (for instructor/admin)
router.get('/', verifyAdmin, async (req, res) => {
    try {
        const courses = await prisma.course.findMany({
            orderBy: { createdAt: 'desc' },
        });
        res.json(courses);
    } catch (error) {
        console.error('[COURSES_GET]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Get single course (Dynamic :id should be last)
router.get('/:id', async (req, res) => {
    try {
        const course = await prisma.course.findUnique({
            where: { id: req.params.id },
            include: {
                user: {
                    select: { name: true, image: true, email: true }
                },
                category: true,
                chapters: {
                    orderBy: { position: 'asc' },
                    include: {
                        lessons: {
                            orderBy: { position: 'asc' }
                        }
                    }
                }
            }
        });
        if (!course) return res.status(404).json({ error: "Course not found" });
        res.json(course);
    } catch (error) {
        console.error('[COURSE_GET]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Update course
router.patch('/:id', verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, price, imageUrl, categoryId, language, requirements, faq, isPublished } = req.body;

        const course = await prisma.course.update({
            where: { id },
            data: {
                title,
                description,
                price: price ? parseFloat(price) : undefined,
                imageUrl,
                categoryId,
                language,
                requirements,
                faq,
                isPublished
            },
        });
        res.json(course);
    } catch (error) {
        console.error('[COURSE_PATCH]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Delete course
router.delete('/:id', verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.course.delete({
            where: { id }
        });
        res.json({ message: "Course deleted" });
    } catch (error) {
        console.error('[COURSE_DELETE]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// --- Chapters & Lessons ---

router.post('/:courseId/chapters', verifyAdmin, async (req, res) => {
    try {
        const { courseId } = req.params;
        const { title } = req.body;
        const lastChapter = await prisma.chapter.findFirst({
            where: { courseId },
            orderBy: { position: 'desc' },
        });
        const newPosition = lastChapter ? lastChapter.position + 1 : 1;
        const chapter = await prisma.chapter.create({
            data: { title, courseId, position: newPosition }
        });
        res.json(chapter);
    } catch (error) {
        console.error('[CHAPTER_CREATE]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

router.post('/chapters/:chapterId/lessons', verifyAdmin, async (req, res) => {
    try {
        const { chapterId } = req.params;
        const { title } = req.body;
        const lastLesson = await prisma.lesson.findFirst({
            where: { chapterId },
            orderBy: { position: 'desc' },
        });
        const newPosition = lastLesson ? lastLesson.position + 1 : 1;
        const lesson = await prisma.lesson.create({
            data: { title, chapterId, position: newPosition }
        });
        res.json(lesson);
    } catch (error) {
        console.error('[LESSON_CREATE]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

module.exports = router;
