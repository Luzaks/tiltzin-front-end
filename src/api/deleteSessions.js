import axios from 'axios';
import { logginCreator } from '../Redux/actions/actions';

const deleteSessions = (dispatch, history) => {
  axios.delete('http://localhost:3001/logout', { withCredentials: true })
    .then(() => {
      const state = {
        status: 'NOT_LOGGED_IN',
        user: {},
      };
      dispatch(logginCreator(state));
      history.push('/');
    }).catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};

export default deleteSessions;
