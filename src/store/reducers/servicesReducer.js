import { 
  LISTEN_SERVICES_START,
  LISTEN_SERVICES_CREATE,
  LISTEN_SERVICES_UPDATE,
  LISTEN_SERVICES_DELETE,
  FETCH_SERVICES
} from '../actions/types';

const initialState = {
  services: [],
  listenServicesStart: 0,
  counterId: '',
};

export default function reducerCase(state = initialState, action) {
  switch (action.type) {
    case LISTEN_SERVICES_START:
      return {
        ...state,
        listenServicesStart: 1
      };
    case LISTEN_SERVICES_CREATE:
      return {
        ...state,
        services: [ ...state.services, action.payload ]
      };
    case LISTEN_SERVICES_UPDATE:
      return {
        ...state,
        services: state.services.map(data => {
          if (data.id === action.payload.id) { return action.payload }
          return data;
        })
      };
    case LISTEN_SERVICES_DELETE:
      return {
        ...state,
        services: state.services.filter(data => data.id !== action.payload.id )
      };
    case FETCH_SERVICES:
      return {
        ...state,
        services: action.payload
      };
    default:
      return state;
  }
}