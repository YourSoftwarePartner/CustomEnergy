import React, { useState } from 'react';
import { t } from 'i18next';
import LocationModal from '../components/new-job/LocationModal';

const NewJob = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleAddLocation = (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const newLocation = {
            locationName: formData.get('locationName') as string,
            siteName: formData.get('siteName') as string,
            siteAddress: formData.get('siteAddress') as string,
            contactName: formData.get('contactName') as string,
            contactNumber: formData.get('contactNumber') as string,
            contactEmail: formData.get('contactEmail') as string,
        };
        // addLocation(newLocation);
        handleCloseModal();
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create New Job</h1>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">{t('Job Name')}</label>
                    <input
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">{t('Type')}</label>
                    <select
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                    >
                        <option value="Commissioning">{t('Commissioning')}</option>
                        <option value="Final Audit">{t('Final Audit')}</option>
                        <option value="HV/LV energisation">{t('HV/LV energisation')}</option>
                        <option value="Metering">{t('Metering')}</option>
                        <option value="Fault Finding">{t('Fault Finding')}</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">{t('Date')}</label>
                    <input
                        type="date"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                    />
                </div>
                <div>
                    <button
                        type="button"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={handleOpenModal}
                    >
                        {t('Add Location')}
                    </button>
                </div>
                <div>
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        {t('Submit')}
                    </button>
                </div>
            </form>

            <LocationModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onAddLocation={handleAddLocation}
            />
        </div>
    );
};

export default NewJob;