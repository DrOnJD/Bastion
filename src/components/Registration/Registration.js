import React from 'react';
import { Formik, Form, Field } from 'formik';
import { func, shape } from 'prop-types';

import styles from './Registration.css';


const Registration = ({ handleSubmit, initState }) => (
  <div className={styles.auth}>
    <h1>Регистрация</h1>
    <Formik
      initialValues={initState}
      onSubmit={handleSubmit}
    >
      <Form>
        <div><Field name="name" /></div>
        <div><Field name="tag" /></div>
        <div><Field type="password" name="password" /></div>
        <div><Field type="password" name="confirmPassword" /></div>
        <div><button type="submit">Submit</button></div>
      </Form>
    </Formik>
  </div>
);

Registration.propTypes = {
  handleSubmit: func.isRequired,
  initState: shape({}).isRequired,
};


export default Registration;
