import React, { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';

import actions from 'store/actions/models';
import Session from 'store/models/Session';

import styles from './Auth.css';


const Auth = () => {
  const dispatch = useDispatch();
  const handleSubmit = useCallback((values) => {
    dispatch(actions.post(Session, values));
  }, [dispatch]);

  const initState = useMemo(() => ({ name: '', tag: '', password: '' }), []);
  return (
    <div>
      <h1>Social Profiles</h1>
      <Formik
        initialValues={initState}
        onSubmit={handleSubmit}
      >
        <Form>
          <div><Field name="tag" /></div>
          <div><Field type="password" name="password" /></div>
          <div><button type="submit">Submit</button></div>
        </Form>
      </Formik>
    </div>
  );
};

export default Auth;
