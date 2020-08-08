import {
  NEW_USER,
  LOGGED_USER,
  CLICKED_PAGE,
  CREATE_DESTINY,
  CREATE_SELECTED,
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

function selectedCreator(isActive, destinyObj) {
  return {
    type: CREATE_SELECTED,
    payload: {
      active: isActive,
      destiny: destinyObj,
    }
  };
}

export {
  userCreator,
  logginCreator,
  pagesCreator,
  destiniesCreator,
  selectedCreator,
};
