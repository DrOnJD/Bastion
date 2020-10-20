import { lazy } from 'react';


export const INDEX = {
  path: '/',
  name: 'Главная',
  exact: true,
  component: lazy(() => import('containers/pages/Index')),
};

export const COLLECTIONS = {
  path: '/collections',
  component: lazy(() => import('containers/pages/Collections')),
};

export const ERROR404 = {
  path: '/',
  component: lazy(() => import('containers/pages/Error404')),
};

export default [
  COLLECTIONS,
  INDEX,
  ERROR404,
];
