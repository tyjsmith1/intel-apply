// components/JobInsights.js
import { useEffect, useState } from 'react';
import { getJobInsights } from '../services/analyticsService';

function JobInsights({ jobs }) {
    const [insights, setInsights] = useState({});

    useEffect(() => {
        const fetchedInsights = getJobInsights(jobs);
        setInsights(fetchedInsights);
    }, [jobs]);

    return (
        <div>
            <h2>Job Insights</h2>
            <p>Total Jobs: {insights.totalJobs}</p>
            <p>Applied Jobs: {insights.appliedJobs}</p>
            <p>Interview Jobs: {insights.interviewJobs}</p>
            <p>Offer Jobs: {insights.offerJobs}</p>
        </div>
    );
}

export default JobInsights;
