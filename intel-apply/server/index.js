const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const jobRoutes = require('./src/routes/jobRoutes');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use('/jobs', jobRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

module.exports = prisma;
