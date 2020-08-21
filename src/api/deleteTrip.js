import axios from 'axios';

const deleteTrip = tripId => {
  axios.delete(`https://fierce-taiga-99651.herokuapp.com/trips/${tripId}`, { withCredentials: true })
    .then(r => r).catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};

export default deleteTrip;
