
import HomePage from '../pages/home.jsx';
import AboutPage from '../pages/about.jsx';
import FormPage from '../pages/form.jsx';
import JobsPage from '../pages/jobs.jsx';
import CustomersPage from '../pages/customers.jsx';
import ProductPage from '../pages/product.jsx';
import AdminPage from '../pages/admin.jsx';
import AssetNew from '..//pages/asset-new.jsx'

import DynamicRoutePage from '../pages/dynamic-route.jsx';
import Client from '../pages/client.jsx';
import NotFoundPage from '../pages/404.jsx';

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
    path: '/customers/',
    component: CustomersPage,
  },
  {
    path: '/product/:id/',
    component: ProductPage,
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

    path: '/client/:clientId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var clientId = to.params.clientId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var client = {
          name: 'British Gas',
          desc: 'Nationwide Gas & Electric Supplier',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: Client,
          },
          {
            props: {
              client: client,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
