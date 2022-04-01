import { 
  LISTEN_SERVICES
} from '../actions/types';

const initialState = {
  services: [],
};

export default function reducerCase(state = initialState, action) {
  switch (action.type) {
    case LISTEN_SERVICES:
      return {
        ...state,
        services: action.payload
      };
    default:
      return state;
  }
}