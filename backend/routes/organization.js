const express = require('express');
const verifyAdmin = require('../middleware/auth');
const router = express.Router();
const prisma = require('../lib/prisma');

// ========== DEPARTMENTS ==========

// Get departments for a company
router.get('/companies/:companyId/departments', verifyAdmin, async (req, res) => {
    try {
        const { companyId } = req.params;

        const departments = await prisma.department.findMany({
            where: { companyId },
            include: {
                _count: {
                    select: { employees: true, teams: true }
                }
            },
            orderBy: { name: 'asc' }
        });

        res.json(departments);
    } catch (error) {
        console.error('[DEPARTMENTS_GET]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Create department
router.post('/companies/:companyId/departments', verifyAdmin, async (req, res) => {
    try {
        const { companyId } = req.params;
        const { name, description } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }

        const department = await prisma.department.create({
            data: {
                name,
                description,
                companyId
            }
        });

        res.json(department);
    } catch (error) {
        console.error('[DEPARTMENT_CREATE]', error);
        if (error.code === 'P2002') {
            return res.status(400).json({ error: 'Department name already exists for this company' });
        }
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Update department
router.patch('/departments/:id', verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;

        const department = await prisma.department.update({
            where: { id },
            data: { name, description }
        });

        res.json(department);
    } catch (error) {
        console.error('[DEPARTMENT_UPDATE]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Delete department
router.delete('/departments/:id', verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;

        const department = await prisma.department.delete({
            where: { id }
        });

        res.json(department);
    } catch (error) {
        console.error('[DEPARTMENT_DELETE]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// ========== TEAMS ==========

// Get teams for a company
router.get('/companies/:companyId/teams', verifyAdmin, async (req, res) => {
    try {
        const { companyId } = req.params;
        const { departmentId } = req.query;

        const where = { companyId };
        if (departmentId) where.departmentId = departmentId;

        const teams = await prisma.team.findMany({
            where,
            include: {
                department: { select: { name: true } },
                _count: { select: { employees: true } }
            },
            orderBy: { name: 'asc' }
        });

        res.json(teams);
    } catch (error) {
        console.error('[TEAMS_GET]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Create team
router.post('/companies/:companyId/teams', verifyAdmin, async (req, res) => {
    try {
        const { companyId } = req.params;
        const { name, description, departmentId } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }

        const team = await prisma.team.create({
            data: {
                name,
                description,
                companyId,
                departmentId
            }
        });

        res.json(team);
    } catch (error) {
        console.error('[TEAM_CREATE]', error);
        if (error.code === 'P2002') {
            return res.status(400).json({ error: 'Team name already exists for this company' });
        }
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Update team
router.patch('/teams/:id', verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const team = await prisma.team.update({
            where: { id },
            data
        });

        res.json(team);
    } catch (error) {
        console.error('[TEAM_UPDATE]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Delete team
router.delete('/teams/:id', verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;

        const team = await prisma.team.delete({
            where: { id }
        });

        res.json(team);
    } catch (error) {
        console.error('[TEAM_DELETE]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// ========== JOB ROLES ==========

// Get job roles for a company
router.get('/companies/:companyId/job-roles', verifyAdmin, async (req, res) => {
    try {
        const { companyId } = req.params;

        const jobRoles = await prisma.jobRole.findMany({
            where: { companyId },
            include: {
                _count: { select: { employees: true, programs: true } }
            },
            orderBy: { name: 'asc' }
        });

        res.json(jobRoles);
    } catch (error) {
        console.error('[JOB_ROLES_GET]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Create job role
router.post('/companies/:companyId/job-roles', verifyAdmin, async (req, res) => {
    try {
        const { companyId } = req.params;
        const { name, description, level } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }

        const jobRole = await prisma.jobRole.create({
            data: {
                name,
                description,
                level,
                companyId
            }
        });

        res.json(jobRole);
    } catch (error) {
        console.error('[JOB_ROLE_CREATE]', error);
        if (error.code === 'P2002') {
            return res.status(400).json({ error: 'Job role name already exists for this company' });
        }
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Update job role
router.patch('/job-roles/:id', verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const jobRole = await prisma.jobRole.update({
            where: { id },
            data
        });

        res.json(jobRole);
    } catch (error) {
        console.error('[JOB_ROLE_UPDATE]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Delete job role
router.delete('/job-roles/:id', verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;

        const jobRole = await prisma.jobRole.delete({
            where: { id }
        });

        res.json(jobRole);
    } catch (error) {
        console.error('[JOB_ROLE_DELETE]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// ========== LOCATIONS ==========

// Get locations for a company
router.get('/companies/:companyId/locations', verifyAdmin, async (req, res) => {
    try {
        const { companyId } = req.params;

        const locations = await prisma.location.findMany({
            where: { companyId },
            include: {
                _count: { select: { employees: true } }
            },
            orderBy: { name: 'asc' }
        });

        res.json(locations);
    } catch (error) {
        console.error('[LOCATIONS_GET]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Create location
router.post('/companies/:companyId/locations', verifyAdmin, async (req, res) => {
    try {
        const { companyId } = req.params;
        const { name, address, city, country } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }

        const location = await prisma.location.create({
            data: {
                name,
                address,
                city,
                country,
                companyId
            }
        });

        res.json(location);
    } catch (error) {
        console.error('[LOCATION_CREATE]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Update location
router.patch('/locations/:id', verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const location = await prisma.location.update({
            where: { id },
            data
        });

        res.json(location);
    } catch (error) {
        console.error('[LOCATION_UPDATE]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// Delete location
router.delete('/locations/:id', verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;

        const location = await prisma.location.delete({
            where: { id }
        });

        res.json(location);
    } catch (error) {
        console.error('[LOCATION_DELETE]', error);
        res.status(500).json({ error: 'Internal Error' });
    }
});

module.exports = router;
