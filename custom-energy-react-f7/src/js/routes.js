
import HomePage from '../pages/home.jsx';
import AboutPage from '../pages/about.jsx';
import FormPage from '../pages/form.jsx';
import JobsPage from '../pages/job/jobs.jsx';
import CustomersPage from '../pages/clients/clients.jsx';
import JobDetailsPage from '../pages/job/job-details.jsx';
import AdminPage from '../pages/admin/admin.jsx';
import AssetNew from '../pages/asset/asset-new.jsx'

import DynamicRoutePage from '../pages/dynamic-route.jsx';
import Client from '../pages/clients/client.jsx';
import NotFoundPage from '../pages/404.jsx';
import ClientNew from '../pages/clients/client-new.jsx';
import ClientsPage from '../pages/clients/clients.jsx';
import AssetManager from 'pages/asset/asset-manager.jsx';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/jobs/',
    component: JobsPage,
  },
  {
    path: '/jobs/:id',
    component: JobDetailsPage,
  },
  {
    path: '/clients/',
    component: ClientsPage,
  },
  {
    path: '/client/new',
    component: ClientNew,
  },
  {
    path: '/admin/',
    component: AdminPage,
  },

  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/client/:clientId/add/asset',
    component: AssetNew
  },
  {
    path: '/client/:clientId/assets',
    component: AssetManager
  },
  {
    path: '/client/:clientId/',
    component: Client,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
