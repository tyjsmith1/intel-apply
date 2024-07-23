// services/analyticsService.js
export const getJobInsights = (jobs) => {
    const totalJobs = jobs.length;
    const appliedJobs = jobs.filter((job) => job.status === 'Applied').length;
    const interviewJobs = jobs.filter(
        (job) => job.status === 'Interview'
    ).length;
    const offerJobs = jobs.filter((job) => job.status === 'Offer').length;

    return {
        totalJobs,
        appliedJobs,
        interviewJobs,
        offerJobs,
    };
};
