const prisma = require('../lib/prisma');

const verifyAdmin = async (req, res, next) => {
    // In a real app, you would verify the JWT token from the Authorization header.
    // For this MVP, we will trust the `x-user-email` header sent by the Next.js API proxy 
    // (which we must ensure is only sent by the server-side proxy).

    const userEmail = req.headers['x-user-email'];

    if (!userEmail) {
        return res.status(401).json({ error: 'Unauthorized: No user email provided' });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { email: userEmail },
        });

        if (user && user.role === 'admin') {
            req.user = user;
            next();
        } else {
            res.status(403).json({ error: 'Forbidden: Admin access required' });
        }
    } catch (error) {
        console.error('Error verifying admin:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = verifyAdmin;
