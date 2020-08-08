import {
  NEW_USER,
  LOGGED_USER,
  CLICKED_PAGE,
  CREATE_DESTINY,
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
      pages: ['DESTINIES', 'APPOINTMENTS'],
    },
  };
}

function destiniesCreator(destinies) {
  return {
    type: CREATE_DESTINY,
    payload: destinies
  };
}

export {
  userCreator,
  logginCreator,
  pagesCreator,
  destiniesCreator,
};
