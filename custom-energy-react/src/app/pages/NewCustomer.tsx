import '../styles/tailwind.css';
import { useTranslation } from 'react-i18next';

function NewCustomer() {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create New Customer</h1>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        {t('Customer Name')}
                    </label>
                    <input
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                        placeholder="Customer Name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        {t('Contact Name')}
                    </label>
                    <input
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                        placeholder="Contact Name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        {t('Contact Number')}
                    </label>
                    <input
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                        placeholder="Contact Number"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        {t('Email')}
                    </label>
                    <input
                        type="email"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                        placeholder="Email"
                    />
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
        </div>
    );
}

export default NewCustomer;