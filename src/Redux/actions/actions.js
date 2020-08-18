import {
  NEW_USER,
  LOGGED_USER,
  CLICKED_PAGE,
  CREATE_DESTINY,
  CREATE_SELECTED,
  CREATE_DATE,
  CREATE_TRIP,
  CREATE_TRIPS,
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
      pages: ['HOME', 'DESTINIES', 'APPOINTMENTS'],
    },
  };
}

function destiniesCreator(destinies) {
  return {
    type: CREATE_DESTINY,
    payload: destinies,
  };
}

function selectedCreator(isActive, destinyObj) {
  return {
    type: CREATE_SELECTED,
    payload: {
      active: isActive,
      destiny: destinyObj,
    },
  };
}

function tripCreator(trip) {
  return {
    type: CREATE_DATE,
    payload: {
      date: trip,
    },
  };
}

function createdCreator(status) {
  return {
    type: CREATE_TRIP,
    payload: {
      status,
    },
  };
}

function tripsCreator(trips) {
  return {
    type: CREATE_TRIPS,
    payload: trips,
  };
}

export {
  userCreator,
  logginCreator,
  pagesCreator,
  destiniesCreator,
  selectedCreator,
  tripCreator,
  createdCreator,
  tripsCreator,
};
