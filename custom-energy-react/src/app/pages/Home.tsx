import { Link } from 'react-router-dom';
import '../styles/tailwind.css';
import {useTranslation} from "react-i18next";

function Home() {
    const { t } = useTranslation();

    return (
        <div className="container p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
                <Link to="/new-customer">
                    <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:bg-gray-100 relative min-h-[150px]">
                        <h2 className="text-xl font-bold mb-2">{t('New Customer')}</h2>
                        <p className="absolute bottom-3 left-3">{t('Register new customer details...')}</p>
                        <span className="absolute bottom-3 right-3">&gt;</span>
                    </div>
                </Link>
                <Link to="/new-job">
                    <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:bg-gray-100 relative min-h-[150px]">
                        <h2 className="text-xl font-bold mb-2">{t('New Job')}</h2>
                        <p className="absolute bottom-3 left-3">{t('Start a new job...')}</p>
                        <span className="absolute bottom-3 right-3">&gt;</span>
                    </div>
                </Link>

                {/* Add more tiles as needed */}
            </div>
        </div>
    );
}

export default Home;
