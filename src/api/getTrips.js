import axios from 'axios';
import { tripsCreator } from '../Redux/actions/actions';

const getTrips = dispatch => {
  axios.get('http://localhost:3001/list_trips', { withCredentials: true })
    .then(r => {
      const { data } = r;
      const { trips } = data;
      dispatch(tripsCreator(trips));
    })// eslint-disable-next-line no-console
    .catch(error => { console.log(error); });
};

export default getTrips;
