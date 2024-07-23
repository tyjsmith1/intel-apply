import { useEffect, useState } from 'react';
import AuthButtons from '../components/AuthButtons';
import JobForm from '../components/JobForm';
import JobInsights from '../components/JobInsights';
import JobList from '../components/JobList';
import { getJobs } from '../services/jobService';

function Home() {
    const [jobs, setJobs] = useState([]);

    const loadJobs = async () => {
        const data = await getJobs();
        setJobs(data);
    };

    useEffect(() => {
        loadJobs();
    }, []);

    const handleJobCreated = (newJob) => {
        setJobs((prevJobs) => [...prevJobs, newJob]);
    };

    const handleJobUpdated = (updatedJob) => {
        setJobs((prevJobs) =>
            prevJobs.map((job) => (job.id === updatedJob.id ? updatedJob : job))
        );
    };

    return (
        <div>
            <h1>Job Tracker App</h1>
            <AuthButtons />
            <JobForm onJobCreated={handleJobCreated} />
            <JobInsights jobs={jobs} />
            <JobList jobs={jobs} onJobUpdated={handleJobUpdated} />
        </div>
    );
}

export default Home;
