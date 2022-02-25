import { combineReducers } from 'redux';
import ticketsReducer from './ticketsReducer';

const reducer = combineReducers({
  tickets: ticketsReducer,
});

export default reducer