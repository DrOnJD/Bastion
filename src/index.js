import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import routes from 'routes';
import { renderRoutes } from 'react-router-config';

import store from 'store';
import Layout from 'containers/Layout';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<h1>Загрузка...</h1>}>{renderRoutes(routes)}</Suspense>
      </Layout>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
