import { combineReducers } from 'redux';
import settingsReducer from './settingsReducer';
import adminReducer from './adminReducer';

const reducer = combineReducers({
  settings: settingsReducer,
  admin:adminReducer
});

export default reducer