import '../css/main.css';

import request from './request';
import { createContries } from './updateUI';
import './filter.js'
import './mode.js'

const API = `https://restcountries.com/v3.1/all`;

request(API)
  .then((data) => {
    createContries(data);
  })
  .catch((err) => {
    alert(err.message);
  });
