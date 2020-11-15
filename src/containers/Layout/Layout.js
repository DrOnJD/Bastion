import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { node } from 'prop-types';

import actions from 'store/actions';
import { selectCurrentSession } from 'store/selectors/session';
import { Session } from 'store/models';
import { getCurrentRoute } from 'routes';
import Error404 from 'containers/pages/Error404';

import styles from './Layout.css';


const Wrapper = ({ children, noLayout }) => noLayout //eslint-disable-line
  ? children
  : (
    <div className={styles.layout}>
      <header>header</header>
      <div className={styles.content}>
        <menu>menu</menu>
        <content>{children}</content>
      </div>
      <footer>footer</footer>
    </div>
  );

const Layout = ({ children }) => {
  const id = 0;
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  useEffect(() => { dispatch(actions.get(Session, { id }, { current: +id })); }, [dispatch, id]);
  const session = useSelector(selectCurrentSession);
  const { roles, noLayout } = getCurrentRoute(pathname);

  return session && roles.includes(session.role)
    ? (
      <Wrapper noLayout={noLayout}>
        {children}
      </Wrapper>
    )
    : <Error404 />;
};

Layout.propTypes = {
  children: node.isRequired,
};


export default Layout;
