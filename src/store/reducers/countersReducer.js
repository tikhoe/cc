import { 
  LISTEN_COUNTERS_START,
  LISTEN_COUNTERS_CREATE,
  LISTEN_COUNTERS_UPDATE,
  LISTEN_COUNTERS_DELETE,
  FETCH_COUNTERS,
  STORE_SIGNIN_COUNTERID
} from '../actions/types';

const initialState = {
  counters: [],
  listenCountersStart: 0,
  counterId: '',
};

export default function reducerCase(state = initialState, action) {
  switch (action.type) {
    case LISTEN_COUNTERS_START:
      return {
        ...state,
        listenCountersStart: 1
      };
    case LISTEN_COUNTERS_CREATE:
      return {
        ...state,
        counters: [ ...state.counters, action.payload ]
      };
    case LISTEN_COUNTERS_UPDATE:
      return {
        ...state,
        counters: state.counters.map(data => {
          if (data.id === action.payload.id) { return action.payload }
          return data;
        })
      };
    case LISTEN_COUNTERS_DELETE:
      return {
        ...state,
        counters: state.counters.filter(data => data.id !== action.payload.id )
      };
    case FETCH_COUNTERS:
      return {
        ...state,
        counters: action.payload
      };
    case STORE_SIGNIN_COUNTERID:
      return {
        ...state,
        counterId: action.payload
      };
    default:
      return state;
  }
}