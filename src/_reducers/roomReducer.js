import { GET_ROOMS, GET_MY_ROOMS, LOAD_ROOM, JOIN_ROOM } from '../_actions/types';

const initialState = {
  rooms: [],
  myrooms: [],
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ROOMS:
      return {
        ...state,
        rooms: action.payload.rooms,
        loading: false
      }
    case GET_MY_ROOMS:
      return {
        ...state,
        myrooms: action.payload.room,
        loading: false
      }
    case JOIN_ROOM:
      return {
        ...state,
        msg: action.payload.msg
      }
    case LOAD_ROOM: {
      return {
        ...state,
        loading: action.payload
      }
    }
    default:
      return state;
  }
}
