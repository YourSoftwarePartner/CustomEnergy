import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./app/pages/Home.tsx";
import LanguageSelector from "./app/components/LanguageSelector.tsx";
import NotFound from "./app/pages/NotFound.tsx";
import {useTranslation} from "react-i18next";
import Jobs from './app/pages/Jobs.tsx';
import JobsDetails from './app/pages/JobsDetails.tsx';
import NewJob from './app/pages/NewJob.tsx';
import NewCustomer from './app/pages/NewCustomer.tsx';

function App() {
    const { t } = useTranslation();

    return (
        <Router>
            <div>
                <nav>
                    <ul className={"flex bg-blue-500 text-white p-4"}>
                        <li className={"mx-2.5"}>
                            <Link to="/">{t('home')}</Link>
                        </li>
                        <li className={"mx-2.5"}>
                            <Link to="/jobs">{t('Current Jobs')}</Link>
                        </li>
                        <li className={'ml-auto'}>
                            <LanguageSelector />
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/jobs/:jobName" element={<JobsDetails />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path="/new-job" element={<NewJob />} />
                    <Route path="/new-customer" element={<NewCustomer />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
