const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getJobs = async (req, res) => {
    try {
        const jobs = await prisma.job.findMany();
        res.json(jobs);
    } catch (error) {
        console.error('Error fetching jobs:', error); // Log the error details
        res.status(500).json({ error: 'Failed to fetch jobs' });
    }
};

const createJob = async (req, res) => {
    try {
        const { title, description, company, status } = req.body;
        const job = await prisma.job.create({
            data: { title, description, company, status },
        });
        res.json(job);
    } catch (error) {
        console.error('Error creating job:', error); // Log the error details
        res.status(500).json({ error: 'Failed to create job' });
    }
};

const updateJob = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const job = await prisma.job.update({
            where: { id: Number(id) },
            data: { status },
        });
        res.json(job);
    } catch (error) {
        console.error('Error updating job:', error); // Log the error details
        res.status(500).json({ error: 'Failed to update job' });
    }
};

module.exports = { getJobs, createJob, updateJob };