import Axios from 'axios';

const urls = {
  test: `https://polysteel-admin-dev.herokuapp.com`,
  development: 'https://polysteel-admin-dev.herokuapp.com',
  production: 'https://polysteel-admin-prod.herokuapp.com',
};
const api = Axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
