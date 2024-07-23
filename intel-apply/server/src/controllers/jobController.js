const prisma = require('../../index');

const getJobs = async (req, res) => {
    const jobs = await prisma.job.findMany();
    res.json(jobs);
};

const createJob = async (req, res) => {
    const { title, description, company, status } = req.body;
    const job = await prisma.job.create({
        data: { title, description, company, status },
    });
    res.json(job);
};

const updateJob = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const job = await prisma.job.update({
        where: { id: Number(id) },
        data: { status },
    });
    res.json(job);
};

module.exports = { getJobs, createJob, updateJob };
