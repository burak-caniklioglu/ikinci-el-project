import axios from 'axios';
import Cookies from 'js-cookie';

export default axios.create({
  baseURL: 'https://bootcamp.akbolat.net',
  headers: {
    Authorization: `Bearer ${Cookies.get('token')}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
