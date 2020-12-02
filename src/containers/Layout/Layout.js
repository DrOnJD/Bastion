import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { node } from 'prop-types';

import Notifications from 'containers/Notifications/Notifications';
import { getCurrentRoute } from 'routes';
import { selectCurrentSession } from 'store/selectors/session';
import actions from 'store/actions/models';
import { Session } from 'store/models/models';
import Error404 from 'containers/pages/Error404';

import Header from './Header';
import styles from './Layout.css';


const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const session = useSelector(selectCurrentSession);
  const route = getCurrentRoute(pathname);

  useEffect(() => { dispatch(actions.get(Session)); }, [dispatch]);

  return (session && route.roles?.includes(session.role)) || (route && !route.roles)
    ? (
      <div className={styles.layout}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Notifications />
      </div>
    )
    : <Error404 />;
};

Layout.propTypes = {
  children: node.isRequired,
};


export default Layout;
