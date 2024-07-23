// components/JobList.js
import { updateJob } from '../services/jobService';

function JobList({ jobs, onJobUpdated }) {
    const handleStatusChange = async (id, status) => {
        const updatedJob = await updateJob(id, status);
        onJobUpdated(updatedJob);
    };

    return (
        <ul>
            {jobs.map((job) => (
                <li key={job.id}>
                    {job.title} at {job.company} - {job.status}
                    <select
                        value={job.status}
                        onChange={(e) =>
                            handleStatusChange(job.id, e.target.value)
                        }
                    >
                        <option value="Applied">Applied</option>
                        <option value="Interview">Interview</option>
                        <option value="Technical Challenge">
                            Technical Challenge
                        </option>
                        <option value="Offer">Offer</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </li>
            ))}
        </ul>
    );
}

export default JobList;
