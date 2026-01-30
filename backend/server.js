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


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
