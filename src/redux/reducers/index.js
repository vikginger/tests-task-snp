import { combineReducers } from 'redux';

import {userReducer} from './userReducer.js';
import {testReducer} from './testReducer.js';
import {questionReducer} from './questionReducer.js';

const rootReducer = combineReducers({
  user: userReducer,
  tests: testReducer,
  question: questionReducer,
});

export default rootReducer;
