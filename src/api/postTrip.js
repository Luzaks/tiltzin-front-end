import axios from 'axios';
import { createdCreator } from '../Redux/actions/actions';

const postTrip = (userId, destinyId, date, city, dispatch) => {
  axios.post('https://fierce-taiga-99651.herokuapp.com/trips',
    {
      destiny_id: parseInt(destinyId, 10),
      user_id: parseInt(userId, 10),
      date,
      destiny_name: city,
    },
    { withCredentials: true })
    .then(r => {
      if (r.status === 200) {
        dispatch(createdCreator(true));
      }
    }).catch(error => {
    // eslint-disable-next-line no-console
      console.log(error);
    });
};

export default postTrip;
