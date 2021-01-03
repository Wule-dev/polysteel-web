import Axios from 'axios';

const urls = {
  test: `http://192.168.1.101:3000/`,
  development: 'http://192.168.1.101:3000/',
  production: 'https://192.168.1.101:3000/',
};
const api = Axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
