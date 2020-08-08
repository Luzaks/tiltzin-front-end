import { combineReducers } from 'redux';
import user from './userReducer';
import loggedIn from './loggedInReducer';
import pages from './pagesReducer';
import destinies from './destiniesReducer';

const rootReducer = combineReducers({
  user,
  loggedIn,
  pages,
  destinies,
});

export default rootReducer;
