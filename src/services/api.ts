import Axios from 'axios';

const urls = {
  test: `http://localhost:3000`,
  development: 'http://polysteel-api-dev.herokuapp.com',
  production: 'http://polysteel-api-prod.herokuapp.com',
};
const api = Axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
