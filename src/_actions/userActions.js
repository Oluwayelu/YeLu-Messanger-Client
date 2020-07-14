import axios from 'axios'
import { useSnackbar } from 'notistack'
import io from 'socket.io-client';

import { AUTH_USER, CURRENT_USER, UPLOAD_AVATAR, GET_ERRORS, CLEAR_ERRORS, LOGOUT_USER, GET_USERS, LOAD_USER } from './types'
import setAuthToken from '../utils/setAuthToken'

let socket = io('http://localhost:8000')

export const register = (userData, history) => dispatch => {
  dispatch(clearErrors())
  axios
    .post('/api/user/', userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

export const login = (userData, history) => dispatch => {
  dispatch(clearErrors())
  axios
    .post('/api/user/login', userData)
    .then(res => {
      const { token } = res.data;

      localStorage.setItem('YeLuMessToken', token)
      setAuthToken(token)
      dispatch(currentUser())
      history.push('/')
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

export const currentUser = () => dispatch => {
  dispatch(loadUser(true))
  axios
    .get('/api/user/current')
    .then(res => {
      dispatch({
        type: CURRENT_USER,
        payload: res.data
      })
    }
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

export const getUsers = () => dispatch => {
  axios
    .get('/api/user')
    .then(res => {
      dispatch({
        type: GET_USERS,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const uploadAvatar = (formData, config) => dispatch => {
  axios
    .post('/api/user/avatar', formData, config)
    .then(res => {
      dispatch({
        type: UPLOAD_AVATAR,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

export const logOut = () => dispatch => {
  localStorage.removeItem('YeLuMessToken')
  delete axios.defaults.headers.common['Authorization'];

  return dispatch({
    type: LOGOUT_USER
  })
}

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}

export const loadUser = (load) => {
  return {
    type: LOAD_USER,
    payload: load
  }
}