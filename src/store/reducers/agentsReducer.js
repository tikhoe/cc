import { 
  FETCH_ORGANIZATIONS,
  FETCH_BRANCHES,
  UPDATE_ORGANIZATION,
  UPDATE_ORGANIZATION_ID,
  UPDATE_BRANCH,
  UPDATE_BRANCH_ID,
  UPDATE_ENDPOINT_IDENTITY,
  UPDATE_SETUP_STATUS,
  FETCH_ENVRONMENT_CONTROL,

  LISTEN_AGENTS_START, 
  LISTEN_AGENTS_CREATE,
  LISTEN_AGENTS_UPDATE,
  LISTEN_AGENTS_DELETE, 
  FETCH_AGENTS,
  AUTHENTICATE_AGENT,
  UNAUTHENTICATE_AGENT,
  AUTHENTICATION_ERROR,
  SAVE_WINDOW_FOCUS
} from '../actions/types';

const initialState = {
  setupStatus: 0,
  organizations: null,
  organization: null,
  organizationId: null,
  branches: null,
  branch: null,
  branchId: null,
  endpointIdentity: null,
  environmentControl: null,

  appStatus: 0,
  listenAgentsStart: 0,
  agents: [],
  authenticatedAgent: {},
  authenticationError: 0,
  windowFocusStatus: true
};

export default function reducerCase(state = initialState, action) {
  switch (action.type) {
    case FETCH_ORGANIZATIONS:
      return {
        ...state,
        organizations: action.payload
      };
    case UPDATE_ORGANIZATION_ID:
      return {
        ...state,
        organizationId: action.payload
      };
    case UPDATE_ORGANIZATION:
      return {
        ...state,
        organization: state.organizations.find( data => data.id === action.payload )
      };
    case FETCH_BRANCHES:
      return {
        ...state,
        branches: action.payload
      };
    case UPDATE_BRANCH_ID:
      return {
        ...state,
        branchId: action.payload
      };
    case UPDATE_BRANCH:
      return {
        ...state,
        branch: state.branches.find( data => data.id === action.payload )
      };
    case UPDATE_ENDPOINT_IDENTITY:
      return {
        ...state,
        endpointIdentity: { ...action.payload }
      };
    case UPDATE_SETUP_STATUS:
      return {
        ...state,
        setupStatus: action.payload
      };
    case FETCH_ENVRONMENT_CONTROL:
      return {
        ...state,
        environmentControl: action.payload
      };


    case LISTEN_AGENTS_START:
      return {
        ...state,
        listenAgentsStart: 1
      };
    case LISTEN_AGENTS_START:
      return {
        ...state,
        listenAgentsStart: state.
      };
    case LISTEN_AGENTS_CREATE:
      return {
        ...state,
        agents: [ ...state.agents, action.payload ]
      };
    case LISTEN_AGENTS_UPDATE:
      return {
        ...state,
        agents: state.agents.map(data => {
          if (data.id === action.payload.id) { return action.payload }
          return data;
        })
      };
    case LISTEN_AGENTS_DELETE:
      return {
        ...state,
        agents: state.agents.filter(data => data.id !== action.payload.id )
      };

    case FETCH_AGENTS:
      return {
        ...state,
        agents: action.payload
      };

    case AUTHENTICATE_AGENT:
      return {
        ...state,
        authenticatedAgent: action.payload[0],
        appStatus: 1
      };
    case AUTHENTICATION_ERROR:
      return {
        ...state,
        authenticatedAgent: {},
        appStatus: 0,
        authenticationError: state.authenticationError + 1
      };
    case UNAUTHENTICATE_AGENT:
      return {
        ...state,
        authenticatedAgent: {},
        appStatus: 0,
        authenticationError: 0
      };
    case SAVE_WINDOW_FOCUS:
      return {
        ...state,
        windowFocusStatus: action.payload
      };

    default:
      return state;
  }
}