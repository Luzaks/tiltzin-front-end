import axios from 'axios';

const getSessions = (addLog, status) => {
  axios.get('http://localhost:3001/logged_in', { withCredentials: true })
    .then(r => {
      const { data } = r;

      if (data.logged_in && status === 'NOT_LOGGED_IN') {
        const state = {
          status: 'LOGGED_IN',
          user: r.data.user,
        };
        addLog(state);
      } else if (!data.logged_in && status === 'LOGGED_IN') {
        const state = {
          status: 'NOT_LOGGED_IN',
          user: {},
        };
        addLog(state);
      }
    })// eslint-disable-next-line no-console
    .catch(error => { console.log(error); });
};

export default getSessions;
