import axios from 'axios';
import { tripsCreator } from '../Redux/actions/actions';

const getTrips = dispatch => {
  axios.get('https://fierce-taiga-99651.herokuapp.com/trips', { withCredentials: true })
    .then(r => {
      const { data } = r;
      const { trips } = data;
      dispatch(tripsCreator(trips));
    })// eslint-disable-next-line no-console
    .catch(error => { console.log(error); });
};

export default getTrips;
