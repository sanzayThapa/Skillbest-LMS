const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const courses = await prisma.course.findMany({
        include: { user: true }
    });
    console.log("Total courses:", courses.length);
    courses.forEach(c => {
        console.log(`- [${c.id}] ${c.title} (Published: ${c.isPublished}, User: ${c.user?.email})`);
    });
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
