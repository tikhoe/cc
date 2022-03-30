import { 
  FETCH_USERS,
  LISTEN_USERS,
  RESET_USER,
  UPDATE_USER,
  CREATE_USER,
  DELETE_USER
} from '../actions/types';
import { userDefault } from '../constants'

const initialState = {
  users: [],
  user: userDefault,
};

export default function reducerCase(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload
      };
    case UPDATE_USER:
      return {
        ...state,
        user: { ...state.user, ...action.payload }
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