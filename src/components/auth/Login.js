import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import postSessions from '../../api/postSessions';
import { logginCreator } from '../../Redux/actions/actions';
import { CircleButton, AuthCont, AuthHeader } from '../../styles/StyledComponents';

const Login = ({ handleSuccesfullAuth, onClick }) => {
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

    postSessions(username, email, pass, handleSuccesfullAuth)
      .then(r => r)
      .catch(error => error);
    ev.preventDefault();
  }

  return (
    <AuthCont>
      <form className="auth-form" onSubmit={handleSubmit}>
        <CircleButton onClick={onClick}>X</CircleButton>
        <AuthHeader>Sign in</AuthHeader>
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
        <button className="submit-btn" type="submit">Login</button>
      </form>
    </AuthCont>
  );
};

Login.propTypes = {
  handleSuccesfullAuth: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Login;
