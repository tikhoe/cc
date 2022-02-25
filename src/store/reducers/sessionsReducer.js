import {
  LISTEN_SESSIONS_START,
  LISTEN_SESSIONS_CREATE,
  LISTEN_SESSIONS_UPDATE,
  LISTEN_SESSIONS_DELETE,
  FETCH_SESSIONS
} from '../actions/types';

const initialState = {
  sessions: [],
  listenSessionsStart: 0,
};

export default function reducerCase(state = initialState, action) {
  switch (action.type) {
    case LISTEN_SESSIONS_START:
      return {
        ...state,
        listenSessionsStart: 1
      };
    case LISTEN_SESSIONS_CREATE:
      return {
        ...state,
        sessions: [ ...state.sessions, action.payload ]
      };
    case LISTEN_SESSIONS_UPDATE:
      return {
        ...state,
        sessions: state.sessions.map(data => {
          if (data.id === action.payload.id) { return action.payload }
          return data;
        })
      };
    case LISTEN_SESSIONS_DELETE:
      return {
        ...state,
        sessions: state.sessions.filter(data => data.id !== action.payload.id )
      };
    case FETCH_SESSIONS:
      return {
        ...state,
        sessions: action.payload
      };
    default:
      return state;
  }
}