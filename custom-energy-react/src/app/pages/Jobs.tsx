import React, { useState } from 'react';
import JobList from '../components/jobs/JobList';
import '../styles/tailwind.css';
import { useTranslation } from 'react-i18next';

function Jobs() {
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="container mx-auto p-4">
            <input
                type="text"
                placeholder={t('search')}
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <JobList searchQuery={searchQuery} />
        </div>
    );
}

export default Jobs;