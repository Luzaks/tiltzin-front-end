import axios from 'axios';

const postTrip = async (userId, destinyId, date) => {
  axios.post('https://fierce-taiga-99651.herokuapp.com/trips',
    {
      user_id: parseInt(userId, 10),
      destiny_id: parseInt(destinyId, 10),
      date,
    },
    { withCredentials: true }).then(r => r).catch(error => {
    // eslint-disable-next-line no-console
    console.log(error);
  });
};

export default postTrip;
