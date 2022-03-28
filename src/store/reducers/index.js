import { combineReducers } from 'redux';
import settingsReducer from './settingsReducer';
import usersReducer from './usersReducer';

const reducer = combineReducers({
  users: usersReducer,
  settings: settingsReducer,
});

export default reducer