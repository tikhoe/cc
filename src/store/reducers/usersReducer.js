import { 
  FETCH_USERS,
  LISTEN_USERS,
  RESET_USER,
  UPDATE_USER,
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER_KEY_VALUE,
  UPDATE_USER_GET_OBJECT,
} from '../actions/types';
import { userDefault } from '../constants'

const initialState = {
  users: [],
  user: userDefault,
};

export default function reducerCase(state = initialState, action) {
  switch (action.type) {
    case LISTEN_USERS:
      return {
        ...state,
        users: action.payload
      };
    case UPDATE_USER_KEY_VALUE:
      return {
        ...state,
        user: { ...state.user, ...action.payload }
      };
    case UPDATE_USER_GET_OBJECT:
      return {
        ...state,
        user: { ...state.users.find(user => user.id === action.payload ), updateStatus: 1 }
      };
    case RESET_USER:
      return {
        ...state,
        user: userDefault
      };
    default:
      return state;
  }
}