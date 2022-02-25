import { 
  LISTEN_CUSTOMERS_START,
  LISTEN_CUSTOMERS_CREATE,
  LISTEN_CUSTOMERS_UPDATE,
  LISTEN_CUSTOMERS_DELETE,
  FETCH_CUSTOMERS
} from '../actions/types';

const initialState = {
  customers: [],
  listenCustomersStart: 0,
  counterId: '',
};

export default function reducerCase(state = initialState, action) {
  switch (action.type) {
    case LISTEN_CUSTOMERS_START:
      return {
        ...state,
        listenCustomersStart: 1
      };
    case LISTEN_CUSTOMERS_CREATE:
      return {
        ...state,
        customers: [ ...state.customers, action.payload ]
      };
    case LISTEN_CUSTOMERS_UPDATE:
      return {
        ...state,
        customers: state.customers.map(data => {
          if (data.id === action.payload.id) { return action.payload }
          return data;
        })
      };
    case LISTEN_CUSTOMERS_DELETE:
      return {
        ...state,
        customers: state.customers.filter(data => data.id !== action.payload.id )
      };
    case FETCH_CUSTOMERS:
      return {
        ...state,
        customers: action.payload
      };
    default:
      return state;
  }
}