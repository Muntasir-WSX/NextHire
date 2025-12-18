// API/ApplicationViewAPI.jsx
export const fetchJobSpecificApplications = (jobId) => {
    return fetch(`http://localhost:3000/applications/job/${jobId}`)
        .then(res => res.json());
};