import {
  GET_USERS,
  LOAD_USER,
  LOGOUT_USER,
  CURRENT_USER,
  UPLOAD_AVATAR,
} from '../_actions/types';

const initialState = {
  isAuth: false,
  user: {},
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_USER:
      return {
        ...state,
        isAuth: true,
        user: action.payload,
        loading: false
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload.users
      };
    case UPLOAD_AVATAR:
      return {
        ...state,
        upload: action.payload
      }
    case LOAD_USER: {
      return {
        ...state,
        loading: action.payload
      }
    }
    case LOGOUT_USER:
      return {
        ...state,
        isAuth: false,
        user: {}
      }
    default:
      return state
  }
}