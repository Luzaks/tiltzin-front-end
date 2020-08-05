import {
  NEW_USER,
  LOGGED_USER,
} from './actionTypes';

function userCreator(user) {
  return {
    type: NEW_USER,
    payload: user,
  };
}

function logginCreator(loggedObj) {
  return {
    type: LOGGED_USER,
    payload: loggedObj,
  };
}

export {
  userCreator,
  logginCreator,
};
