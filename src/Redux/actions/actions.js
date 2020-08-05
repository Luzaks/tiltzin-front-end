import {
  NEW_USER,
} from './actionTypes';

function userCreator(user) {
  return {
    type: NEW_USER,
    payload: user,
  };
}

export {
  userCreator,
};
