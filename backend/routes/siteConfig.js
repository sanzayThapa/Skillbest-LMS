const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();
const prisma = new PrismaClient();

const verifyAdmin = require('../middleware/auth');

// Get all site configurations
router.get('/config', async (req, res) => {
    try {
        const configs = await prisma.siteConfig.findMany();
        // Transform array to object for easier frontend consumption
        const configMap = configs.reduce((acc, curr) => {
            acc[curr.key] = curr.value;
            return acc;
        }, {});
        res.json(configMap);
    } catch (error) {
        console.error('Error fetching config:', error);
        res.status(500).json({ error: 'Failed to fetch configuration' });
    }
});

// Update site configuration (Admin only)
router.post('/config', verifyAdmin, async (req, res) => {
    const settings = req.body; // Expect key-value object

    try {
        const transactions = Object.entries(settings).map(([key, value]) => {
            return prisma.siteConfig.upsert({
                where: { key },
                update: { value: String(value) },
                create: { key, value: String(value) },
            });
        });

        await prisma.$transaction(transactions);
        res.json({ message: 'Configuration updated successfully' });
    } catch (error) {
        console.error('Error updating config:', error);
        res.status(500).json({ error: 'Failed to update configuration' });
    }
});

module.exports = router;
