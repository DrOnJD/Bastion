import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { node } from 'prop-types';

import actions from 'store/actions';
import { selectCurrentSession } from 'store/selectors/session';
import { Session } from 'store/models';
import { getCurrentRoute } from 'routes';

import Error404 from 'containers/pages/Error404';

import Header from './Header';
import styles from './Layout.css';


const Layout = ({ children }) => {
  const id = 0;
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  useEffect(() => { dispatch(actions.get(Session, { id }, { current: +id })); }, [dispatch, id]);
  const session = useSelector(selectCurrentSession);
  const { roles } = getCurrentRoute(pathname);

  return session && roles.includes(session.role)
    ? (
      <div className={styles.layout}>
        <Header />
        <div className={styles.content}>{children}</div>
      </div>
    )
    : <Error404 />;
};

Layout.propTypes = {
  children: node.isRequired,
};


export default Layout;
