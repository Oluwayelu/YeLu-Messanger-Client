import axios from 'axios'
import { useSnackbar } from 'notistack'
import io from 'socket.io-client';

import { LOAD_CHAT, GET_CHATS, SEND_CHAT, GET_MESSAGES, CLEAR_MESSAGES, CLEAR_ERRORS, GET_ERRORS } from './types'

let socket = io('http://localhost:8000')

export const getChats = () => dispatch => {
  dispatch(loadChat(true))
  axios
    .get('/api/chat')
    .then(res =>
      dispatch({
        type: GET_CHATS,
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

export const sendChat = (chatData) => dispatch => {
  dispatch(loadChat(true))
  axios
    .post('/api/chat', chatData)
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

export const loadChat = (load) => {
  return {
    type: LOAD_CHAT,
    payload: load
  }
}