import axios from 'axios';

const API_URL = 'http://localhost:5000/jobs';

export const getJobs = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createJob = async (job) => {
    const response = await axios.post(API_URL, job);
    return response.data;
};

export const updateJob = async (id, status) => {
    const response = await axios.put(`${API_URL}/${id}`, { status });
    return response.data;
};
