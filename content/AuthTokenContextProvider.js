import * as Auth from '../api/auth';
import {useQuery} from 'react-query';
import {createContext, useState} from 'react';

export const AuthTokenContext = createContext();

const AuthTokenContextProvider = ({}) => {
  const [token, setToken] = useState('');
};
