import { lazy } from 'react';


export const INDEX = {
  path: '/',
  name: 'Главная',
  component: lazy(() => import('containers/pages/Index')),
};

export const COLLECTIONS = {
  path: '/collections',
  component: lazy(() => import('containers/pages/Collections')),
};

export default [
  COLLECTIONS,
  INDEX,
];
