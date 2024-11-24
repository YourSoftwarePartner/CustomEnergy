import { useParams } from 'react-router-dom';
import jobsData from '../../mock/data/jobs.json';

function JobsDetails() {
    const { jobName } = useParams<{ jobName: string }>();
    const job = jobsData.find((job) => job.name === jobName);

    if (!job) {
        return <div>Job not found</div>;
    }

    return (
        <div>
            <h1>{job.name}</h1>
            <p>Type: {job.type}</p>
            <p>Date: {job.date}</p>
        </div>
    );
};

export default JobsDetails;