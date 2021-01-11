import { lazy } from 'react';
import { matchPath } from 'react-router';

import { roles } from 'store/constants';


const routes = [{
  path: '/',
  name: 'Главная',
  exact: true,
  component: lazy(() => import('containers/pages/Index')),
  roles: [roles.root, roles.admin, roles.user, roles.guest],
}, {
  path: '/collections',
  component: lazy(() => import('containers/pages/Collections')),
  roles: [roles.root, roles.admin],
}, {
  path: '/(auth|registration)',
  component: lazy(() => import('containers/pages/AuthReg')),
}, {
  path: '*',
  component: lazy(() => import('containers/pages/Error404')),
}];


const getCurrentRoute = (pathname) => routes.find((route) => matchPath(pathname, route));

export {
  getCurrentRoute,
};

export default routes;
