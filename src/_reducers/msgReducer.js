import { GET_MESSAGES, CLEAR_MESSAGES } from '../_actions/types';

export default function (state = '', action) {
  switch (action.type) {
    case GET_MESSAGES:
      return action.payload.msg;
    case CLEAR_MESSAGES:
      return '';
    default:
      return state;
  }
}
