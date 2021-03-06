import axios from 'axios';

const postSessions = async (username, email, pass, handleSuccesfullAuth) => {
  axios.post('https://fierce-taiga-99651.herokuapp.com/sessions',
    {
      username,
      email,
      password: pass,
    },
    { withCredentials: true }).then(r => {
    if (r.data.logged_in) {
      handleSuccesfullAuth(r.data);
    }
  }).catch(error => {
    // eslint-disable-next-line no-console
    console.log(error);
  });
};

export default postSessions;
