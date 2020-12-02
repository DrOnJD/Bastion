import { compile } from 'path-to-regexp';
import isEmpty from 'lodash/isEmpty';

import handler from './handler';


export default class BaseApi {
  version = 1;

  handler = handler;

  api = 'api';

  getUrl({ id, ...params } = {}) {
    const queryString = !isEmpty(params) ? `?${new URLSearchParams(params).toString()}` : '';
    return `${this.api}/v${this.version}/${compile(this.baseUrl)({ id, ...params })}${queryString}`;
  }

  async post(model, headers) {
    const res = await this.handler.post(this.getUrl(), model, { headers });
    return res;
  }

  async patch(model, headers) {
    const res = await this.handler.patch(this.getUrl(), model, { headers });

    return res;
  }

  async get(params = {}, headers) {
    const res = await this.handler.get(this.getUrl({ ...params }), { headers });

    return res;
  }

  async delete(id) {
    await this.handler.delete(this.getUrl({ id }));
  }
}
