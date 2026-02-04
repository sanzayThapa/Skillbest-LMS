const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const siteConfigRoutes = require('./routes/siteConfig');
const courseRoutes = require('./routes/course');
const uploadRoutes = require('./routes/upload');
const companiesRoutes = require('./routes/companies');
const employeesRoutes = require('./routes/employees');
const organizationRoutes = require('./routes/organization');
const programsRoutes = require('./routes/programs');
const enrollmentsRoutes = require('./routes/enrollments');
const complianceRoutes = require('./routes/compliance');
const dashboardRoutes = require('./routes/dashboard');
const path = require('path');

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Serve static files from public/uploads
// Ensure 'public' folder exists at root or define path relative to backend
// We'll assume a 'public' folder at project root for now, but let's map it safely.
// Actually, in our structure, `public` is at `../public` relative to `backend`.
app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));

// Routes
app.use('/api', siteConfigRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/companies', companiesRoutes);
app.use('/api/employees', employeesRoutes);
app.use('/api/organization', organizationRoutes);
app.use('/api/programs', programsRoutes);
app.use('/api/enrollments', enrollmentsRoutes);
app.use('/api/compliance', complianceRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
