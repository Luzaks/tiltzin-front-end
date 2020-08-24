import axios from 'axios';

const postRegistrations = async (username, email, pass, conpass, handleSuccesfullAuth) => {
  axios.post('https://fierce-taiga-99651.herokuapp.com/registrations',
    {
      username,
      email,
      password: pass,
      password_confirmation: conpass,
    },
    { withCredentials: true }).then(r => {
    if (r.data.status === 'created') {
      handleSuccesfullAuth(r.data);
    }
  }).catch(error => {
    // eslint-disable-next-line no-console
    console.log(error);
  });
};

export default postRegistrations;
