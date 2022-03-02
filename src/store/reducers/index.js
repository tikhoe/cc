import { combineReducers } from 'redux';
import settingsReducer from './settingsReducer';

const reducer = combineReducers({
  settings: settingsReducer,
});

export default reducer