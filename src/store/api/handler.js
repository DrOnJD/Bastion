import axios from 'axios';
import { stringify } from 'qs';


const ORIGIN = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_PROD_URL
  : process.env.REACT_APP_LOCAL_URL;

const handler = axios.create({
  responseType: 'json',
  headers: { Accept: 'application/json' },
  paramsSerializer: (params) => stringify(params, { arrayFormat: 'comma' }),
  baseURL: ORIGIN,
});

handler.interceptors.request.use(
  (config) => config,
);

export default handler;
