import { combineReducers } from 'redux';

import Example from './reducer_example';
import ActiveExample from './reducer_active';
import Login from './Login';

const rootReducer = combineReducers({
  // Just mapping with the reduers (book: BookReducer)
  example: Example,
  activeExample: ActiveExample,
  login: Login
});

export default rootReducer;