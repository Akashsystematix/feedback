import axios from 'axios';

import {API_REQUEST, API_FAIL, API_SUCCESS} from './actionTypes';

export const fetchTodo = () => {
  return (dispatch) => {
    const url = `https://api.myjson.com/bins/141yrk`;
    dispatch({type: API_REQUEST});
    axios.get(url)
        .then(res => fetchSuccess(dispatch, res.data.items))
        .catch(error => fetchFail(dispatch, error));
  };
};

const fetchFail = (dispatch, error) => {
  dispatch({type: API_FAIL, payload: error});
};

const fetchSuccess = (dispatch, todo) => {
  dispatch({type: API_SUCCESS, payload: data});
};
