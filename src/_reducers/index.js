import { combineReducers } from 'redux';
import room from './roomReducer';
import user from './userReducer';
import chat from './chatReducer';
import error from './errorReducer';
import msg from './msgReducer';

export default combineReducers({
  msg,
  user,
  room,
  chat,
  error,
});
