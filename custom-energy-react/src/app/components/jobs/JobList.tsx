import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jobsData from '../../../mock/data/jobs.json';

interface Job {
    name: string;
    type: string;
    date: string;
}

interface JobListProps {
    searchQuery: string;
}

const JobList: React.FC<JobListProps> = ({ searchQuery }) => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        setJobs(jobsData);
    }, []);

    const handleJobClick = (jobName: string) => {
        navigate(`/jobs/${jobName}`);
    };

    const filteredJobs = jobs.filter(job =>
        job.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container">
            <h1 className="text-2xl font-bold mb-4">Job List</h1>
            <ul className="space-y-4">
                {filteredJobs.map((job) => (
                    <li
                        key={job.name}
                        onClick={() => handleJobClick(job.name)}
                        className="p-4 bg-white shadow rounded-lg cursor-pointer hover:bg-gray-100"
                    >
                        <div className="font-bold">{job.name}</div>
                        <div>{job.type}</div>
                        <div>{job.date}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobList;