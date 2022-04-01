import { combineReducers } from 'redux';
import settingsReducer from './settingsReducer';
import usersReducer from './usersReducer';
import organizationsReducer from './organizationsReducer';
import branchesReducer from './branchesReducer';
import servicesReducer from './servicesReducer';

const reducer = combineReducers({
  users: usersReducer,
  organizations: organizationsReducer,
  branches: branchesReducer,
  services: servicesReducer,
  settings: settingsReducer,
});

export default reducer