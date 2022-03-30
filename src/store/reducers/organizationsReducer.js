import { 
    FETCH_ORGANIZATIONS,
    LISTEN_ORGANIZATIONS,
    CREATE_ORGANIZATION,
    DELETE_ORGANIZATION,
    UPDATE_ORGANIZATION_KEY_VALUE,
    UPDATE_ORGANIZATION_GET_OBJECT,
    RESET_ORGANIZATION,
} from '../actions/types';
import { organizationDefault } from '../constants'

const initialState = {
  organizations: [],
  organization: organizationDefault
};

export default function reducerCase(state = initialState, action) {
  switch (action.type) {
    case FETCH_ORGANIZATIONS:
      return {
        ...state,
        organizations: action.payload
      };
    case LISTEN_ORGANIZATIONS:
      return {
        ...state,
        organizations: action.payload
      };
    case UPDATE_ORGANIZATION_KEY_VALUE:
      return {
        ...state,
        organization: { ...state.organization, ...action.payload }
      };
    case RESET_ORGANIZATION:
      return {
        ...state,
        organization: organizationDefault
      };
    case UPDATE_ORGANIZATION_GET_OBJECT:
      return {
        ...state,
        organization: { ...state.organizations.find(org => org.id === action.payload ), updateStatus: 1 }
      };
    default:
      return state;
  }
}