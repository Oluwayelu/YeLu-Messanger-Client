import axios from 'axios'
import { useSnackbar } from 'notistack'
import io from 'socket.io-client';

import { LOAD_ROOM, GET_ROOMS, GET_ERRORS, GET_MY_ROOMS, CREATE_ROOM, JOIN_ROOM, GET_MESSAGES, CLEAR_MESSAGES, CLEAR_ERRORS } from './types'

let socket = io('http://localhost:8000')

export const getAllRoom = () => dispatch => {
  dispatch(loadRoom(true))
  axios
    .get('/api/room')
    .then(res =>
      dispatch({
        type: GET_ROOMS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

export const getMyRooms = () => dispatch => {
  dispatch(loadRoom(true))
  axios
    .get('/api/room/myrooms')
    .then(res =>
      dispatch({
        type: GET_MY_ROOMS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

export const createRoom = (roomData) => dispatch => {
  dispatch(clearErrors())
  dispatch(clearMessges())
  axios
    .post('/api/room', roomData)
    .then(res =>
      dispatch({
        type: GET_MESSAGES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

export const joinRoom = (roomData) => dispatch => {
  dispatch(clearErrors())
  dispatch(clearMessges())
  axios
    .post('/api/room/join', roomData)
    .then(res =>
      dispatch({
        type: GET_MESSAGES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

export const clearMessges = () => {
  return {
    type: CLEAR_MESSAGES
  }
}

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}

export const loadRoom = (load) => {
  return {
    type: LOAD_ROOM,
    payload: load
  }
}