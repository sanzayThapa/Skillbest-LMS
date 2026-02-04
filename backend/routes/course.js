const express = require('express');
const verifyAdmin = require('../middleware/auth'); // Reuse admin middleware or create specific one
const router = express.Router();
const prisma = require('../lib/prisma');

// Create a new course
router.post('/', verifyAdmin, async (req, res) => {
    try {
        const { title, userId } = req.body;
        // Note: userId should ideally come from the verified token/session in production.
        // For now, we trust the input or the verifyAdmin middleware if it attaches user.
        // If verifyAdmin attaches req.user, use req.user.id.

        // Fallback if title is missing
        if (!title) {
            return res.status(400).json({ error: "Title is required" });
        }

        const course = await prisma.course.create({
            data: {
                userId: req.user ? req.user.id : userId, // Use authenticated user if available
                title,
            },
        });
        res.json(course);
    } catch (error) {
        console.error('[COURSES_POST]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Get all courses (for instructor)
router.get('/', verifyAdmin, async (req, res) => {
    try {
        // Determine if we should filter by user or return all (admin view)
        // For "Instructor Dashboard", they should see THEIR courses.
        // If req.user is set, filter by it.
        const whereClause = req.user ? { userId: req.user.id } : {};

        const courses = await prisma.course.findMany({
            where: whereClause,
            orderBy: { createdAt: 'desc' },
        });
        res.json(courses);
    } catch (error) {
        console.error('[COURSES_GET]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});


// Get single course
router.get('/:id', async (req, res) => {
    try {
        const course = await prisma.course.findUnique({
            where: { id: req.params.id },
            include: {
                chapters: {
                    orderBy: { position: 'asc' },
                    include: {
                        lessons: {
                            orderBy: { position: 'asc' }
                        }
                    }
                },
                attachments: {
                    orderBy: { createdAt: 'desc' }
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
        const values = req.body;
        const course = await prisma.course.update({
            where: { id },
            data: { ...values },
        });
        res.json(course);
    } catch (error) {
        console.error('[COURSE_PATCH]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Delete course (optional for now, but good to have)
router.delete('/:id', verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const course = await prisma.course.delete({
            where: { id }
        });
        res.json(course);
    } catch (error) {
        console.error('[COURSE_DELETE]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// --- Chapters & Lessons (Simple implementation nested here for speed) ---

// Create Chapter
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
            data: {
                title,
                courseId,
                position: newPosition,
            }
        });
        res.json(chapter);
    } catch (error) {
        console.error('[CHAPTER_CREATE]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Create Lesson
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
            data: {
                title,
                chapterId,
                position: newPosition,
            }
        });
        res.json(lesson);
    } catch (error) {
        console.error('[LESSON_CREATE]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

module.exports = router;
