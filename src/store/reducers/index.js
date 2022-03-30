import { combineReducers } from 'redux';
import settingsReducer from './settingsReducer';
import usersReducer from './usersReducer';
import organizationsReducer from './organizationsReducer';
import branchesReducer from './branchesReducer';

const reducer = combineReducers({
  users: usersReducer,
  organizations: organizationsReducer,
  branches: branchesReducer,
  settings: settingsReducer,
});

export default reducer