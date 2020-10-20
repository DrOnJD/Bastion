import React from 'react';
import { useSelector } from 'react-redux';

import Error404 from 'containers/pages/Error404';
import { selectCurrentModel } from 'store/selectors/models';
import { Session } from 'store/models';


export default (roles) => (Component) => (props) => {
  const session = useSelector(selectCurrentModel(Session));

  return roles.includes(session?.role) ? <Component {...props} /> : <Error404 />;
};
