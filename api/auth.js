import axios from 'axios';
import {apiUrl} from '../consts/api';

export const login = () => {
  const username = 'krishnag+02@gmail.com';
  const password = 'test1234';
  return axios.post(apiUrl + '/auth/login', {username, password});
};
