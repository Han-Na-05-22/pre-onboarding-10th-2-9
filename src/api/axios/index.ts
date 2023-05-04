// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.clinicaltrialskorea.com/api/v1/search-conditions/',
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default instance;
