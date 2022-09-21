import axios from 'axios';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';
import {apiUrl} from '../consts/api';

export const action = (action_id, user_id, likes) => {
  return axios.post(apiUrl + 'likes', {
    type: 'action',
    action_id,
    user_id,
    likes,
  });
};

// a way to make requests to existing server stood up by the backend flask, can be added in the components.
