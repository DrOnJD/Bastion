import React from 'react';
import { Formik, Form, Field } from 'formik';
import { func, shape } from 'prop-types';

import styles from './Auth.css';


const Auth = ({ handleSubmit, initState }) => (
  <div className={styles.auth}>
    <h1>Авторизация</h1>
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

Auth.propTypes = {
  handleSubmit: func.isRequired,
  initState: shape({}).isRequired,
};


export default Auth;
