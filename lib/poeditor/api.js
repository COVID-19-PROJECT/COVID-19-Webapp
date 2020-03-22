/**
    Copyright (C) 2019  Javier Toledo & Fernando Navarijo

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';

const axios = require('axios');
const qs = require('qs');
const fs = require('fs');
const FormData = require('form-data');

module.exports = class Poeditor {
  constructor (token) {
    this.token = token;
    this.axios = axios.create({
      baseURL: 'https://api.poeditor.com/v2',
    });
  }
  async request (endpoint, parameters) {
    const preparedParameters = this.prepareParameters(parameters);
    const { data } = await this.axios.post(endpoint, qs.stringify(preparedParameters));
    return data.result;
  }

  async upload(filepath, parameters) {
    const preparedParameters = this.prepareParameters(parameters);
    
    const form = new FormData();
    Object.getOwnPropertyNames(preparedParameters).forEach(param => {
      form.append(param, preparedParameters[param]);
    });
    form.append('file', fs.createReadStream(filepath));

    const { data } = await this.axios.post('/projects/upload', form, {
      headers: form.getHeaders(),
    });

    return data.result;
  }

  prepareParameters(parameters) {
    const preparedParameters = Object.assign({}, parameters);
    preparedParameters.api_token = this.token;
    return preparedParameters;
  }
};