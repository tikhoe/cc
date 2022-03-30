import { 
    FETCH_BRANCHES,
    LISTEN_BRANCHES,
    RESET_BRANCH,
    UPDATE_BRANCH,
    CREATE_BRANCH,
    DELETE_BRANCH,
} from '../actions/types';
import { branchDefault } from '../constants'

const initialState = {
  branches: [],
  branch: branchDefault,
};

export default function reducerCase(state = initialState, action) {
  switch (action.type) {
    case FETCH_BRANCHES:
      return {
        ...state,
        branches: action.payload
      };
    case UPDATE_BRANCH:
      return {
        ...state,
        branch: { ...state.branch, ...action.payload }
      };
    case RESET_BRANCH:
      return {
        ...state,
        branch: branchDefault
      };
    default:
      return state;
  }
}