import { createSelector } from 'reselect';

import { Session } from 'store/models';
import { roles } from 'store/constants';

import { selectCurrentModel } from './models';


const selectCurrentSession = createSelector(
  selectCurrentModel(Session),
  (session) => session || { role: roles.guest },
);

export {
  selectCurrentSession,
};
