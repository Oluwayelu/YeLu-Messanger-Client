import { LOAD_CHAT, GET_CHATS } from '../_actions/types';

const initialState = {
  chats: [],
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CHATS:
      return {
        ...state,
        chats: action.payload.chats,
        loading: false
      }
    case LOAD_CHAT: {
      return {
        ...state,
        loading: action.payload
      }
    }
    default:
      return state;
  }
}
