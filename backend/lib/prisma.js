// Import Prisma Client from parent directory where it's generated
const { PrismaClient } = require('../../node_modules/@prisma/client');

// Create a single Prisma Client instance
const prisma = new PrismaClient();

module.exports = prisma;
