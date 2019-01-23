import {
  USER_LOGIN,
} from './Type.js';
import axios from "axios/index";
import {API} from '../common/utils';



export function login(form, callback) {
  const request = axios.post(`${API.Login}`,form)
  return (dispatch) => {
      request.then((val) => {
          callback(val)
          dispatch({
              type: USER_LOGIN,
              payload: val.data
          });
      }).catch((error) => {
          callback(error);
         // apiErrors(error.response);
      });

  }
}

