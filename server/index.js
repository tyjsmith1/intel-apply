const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const jobRoutes = require('./src/routes/jobRoutes');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use('/jobs', jobRoutes);

app.listen(5001, () => {
    console.log('Server is running on port 5001');
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error('Port 5001 is already in use. Please use a different port.');
        process.exit(1);
    } else {
        throw err;
    }
});

module.exports = prisma;