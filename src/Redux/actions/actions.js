import {
  NEW_USER,
  LOGGED_USER,
  CLICKED_PAGE,
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

function pagesCreator(clickedPage) {
  return {
    type: CLICKED_PAGE,
    payload: {
      clicked: clickedPage,
    },
  };
}

export {
  userCreator,
  logginCreator,
  pagesCreator,
};
