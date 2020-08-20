import axios from 'axios';

const deleteTrip = tripId => {
  axios.delete(`http://localhost:3001/trips/${tripId}`, { withCredentials: true })
    .then(r => r).catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};

export default deleteTrip;
