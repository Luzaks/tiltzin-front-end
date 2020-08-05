import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { logginCreator } from '../../Redux/actions/actions';

const Login = ({ handleSuccesfullAuth }) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  function handleSubmit(ev) {
    const loggedIn = {
      status: 'LOGGED_IN',
      user: {
        username,
        email,
        password: pass,
      },
    };

    dispatch(logginCreator(loggedIn));

    axios.post('https://fierce-taiga-99651.herokuapp.com/sessions',
      {
        user: {
          username,
          email,
          password: pass,
        },
      },
      { withCredentials: true }).then(r => {
      if (r.data.logged_in) {
        handleSuccesfullAuth(r.data);
      }
    }).catch(error => {
      console.log(error);
    });
    ev.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          placeholder="Write your name"
          className="username"
          name="username"
          value={username}
          onChange={ev => {
            setUsername(ev.target.value);
          }}
          required
        />
        <input
          type="email"
          id="email"
          placeholder="Write your email"
          className="email"
          name="email"
          value={email}
          onChange={ev => {
            setEmail(ev.target.value);
          }}
          required
        />
        <input
          type="password"
          id="password"
          placeholder="Write your password"
          className="password"
          name="password"
          value={pass}
          onChange={ev => {
            setPass(ev.target.value);
          }}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

Login.propTypes = {
  handleSuccesfullAuth: PropTypes.func.isRequired,
};

export default Login;
