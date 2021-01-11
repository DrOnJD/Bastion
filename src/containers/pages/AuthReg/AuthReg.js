import React, { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { shape } from 'prop-types';

import actions from 'store/actions/models';
import Session from 'store/models/Session';
import User from 'store/models/User';
import Auth from 'components/Auth/Auth';
import Registration from 'components/Registration/Registration';
import { Notification } from 'store/models';

import styles from './AuthReg.css';


const AuthReg = ({ match: { params: { 0: pageName } } }) => {
  const dispatch = useDispatch();

  const handleAuthSubmit = useCallback((values) => {
    values.tag = `#${values.tag}`;
    dispatch(actions.post(Session, values));
  }, [dispatch]);
  const handleRegSubmit = useCallback((values) => {
    if (values.password !== values.confirmPassword) {
      return dispatch(actions.add(Notification, { message: 'Пароли не совпадают', status: 'warning' }));
    }
    values.tag = `#${values.tag}`;
    return dispatch(actions.post(User, values));
  }, [dispatch]);

  const initAuthState = useMemo(() => ({ name: '', tag: '', password: '' }), []);
  const initRegState = useMemo(() => ({
    name: '',
    password: '',
    confirmPassword: '',
    tag: '',
  }), []);

  return (
    <div className={styles.authReg}>
      {pageName === 'auth'
        ? <Auth initState={initAuthState} handleSubmit={handleAuthSubmit} />
        : <Registration initState={initRegState} handleSubmit={handleRegSubmit} />}

    </div>
  );
};

AuthReg.propTypes = {
  match: shape({}).isRequired,
};


export default AuthReg;
