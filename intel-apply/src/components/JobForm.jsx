// components/JobForm.js
import { useState } from 'react';
import { createJob } from '../services/jobService';

function JobForm({ onJobCreated }) {
    const [job, setJob] = useState({
        title: '',
        description: '',
        company: '',
        status: 'Applied',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJob((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newJob = await createJob(job);
        onJobCreated(newJob);
        setJob({ title: '', description: '', company: '', status: 'Applied' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={job.title}
                onChange={handleChange}
                placeholder="Job Title"
                required
            />
            <input
                type="text"
                name="description"
                value={job.description}
                onChange={handleChange}
                placeholder="Job Description"
                required
            />
            <input
                type="text"
                name="company"
                value={job.company}
                onChange={handleChange}
                placeholder="Company"
                required
            />
            <select name="status" value={job.status} onChange={handleChange}>
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
                <option value="Technical Challenge">Technical Challenge</option>
                <option value="Offer">Offer</option>
                <option value="Rejected">Rejected</option>
            </select>
            <button type="submit">Add Job</button>
        </form>
    );
}

export default JobForm;
