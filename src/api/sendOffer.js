/* eslint-disable no-param-reassign */
import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = 'https://bootcamp.akbolat.net';
const sendOffer = axios.create({
  baseURL,
});

sendOffer.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers.accept = 'application/json';
      config.headers['Content-Type'] = 'application/json';
    }

    return config;
  },

  (error) => Promise.reject(error),
);

export default sendOffer;
