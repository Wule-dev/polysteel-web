import Axios from 'axios';

const urls = {
<<<<<<< HEAD
  test: `http://192.168.0.106:3000`,
  development: 'http://192.168.0.106:3000',
  production: 'http://192.168.0.106:3000',
=======
  test: `http://192.168.1.101:3000/`,
  development: 'http://192.168.1.101:3000/',
  production: 'https://192.168.1.101:3000/',
>>>>>>> b92afcadb1305a227a7a60b5d98d1489916ae625
};
const api = Axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
