import { combineReducers } from 'redux';
import user from './userReducer';
import loggedIn from './loggedInReducer';
import pages from './pagesReducer';
import destinies from './destiniesReducer';
import selected from './selectedReducer';
import trip from './tripReducer';
import trips from './tripsReducer';
import created from './createdReducer';

const rootReducer = combineReducers({
  user,
  loggedIn,
  pages,
  destinies,
  selected,
  trip,
  trips,
  created,
});

export default rootReducer;
