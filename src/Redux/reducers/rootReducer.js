import { combineReducers } from 'redux';
import user from './userReducer';
import loggedIn from './loggedInReducer';
import pages from './pagesReducer';
import destinies from './destiniesReducer';
import selected from './selectedReducer';
import trip from './tripReducer';
import trips from './tripsReducer';

const rootReducer = combineReducers({
  user,
  loggedIn,
  pages,
  destinies,
  selected,
  trip,
  trips,
});

export default rootReducer;
