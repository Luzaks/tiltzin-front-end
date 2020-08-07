import { combineReducers } from 'redux';
import user from './userReducer';
import loggedIn from './loggedInReducer';
import pages from './pagesReducer';

const rootReducer = combineReducers({
  user,
  loggedIn,
  pages,
});

export default rootReducer;
