import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { userCreator } from '../../Redux/actions/actions';
import { AuthCont, CircleButton, AuthHeader } from '../../styles/StyledComponents';

const Registration = ({ handleSuccesfullAuth, onClick }) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [conpass, setConpass] = useState('');

  function handleSubmit(ev) {
    const user = {
      username,
      email,
      password: pass,
      password_confirmation: conpass,
    };

    dispatch(userCreator(user));

    axios.post('http://localhost:3001/registrations',
      {
        user: {
          username,
          email,
          password: pass,
          password_confirmation: conpass,
        },
      },
      { withCredentials: true }).then(r => {
      if (r.data.status === 'created') {
        handleSuccesfullAuth(r.data);
      }
    }).catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
    ev.preventDefault();
  }

  return (
    <AuthCont>
      <form className="auth-form" onSubmit={handleSubmit}>
        <CircleButton onClick={onClick}>X</CircleButton>
        <AuthHeader>Sign up</AuthHeader>
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
        <input
          type="password"
          id="password_confirmation"
          placeholder="Confirm your password"
          className="password_confirmation"
          name="password_confirmation"
          value={conpass}
          onChange={ev => {
            setConpass(ev.target.value);
          }}
          required
        />
        <button className="submit-btn" type="submit">Register</button>
      </form>
    </AuthCont>
  );
};

Registration.propTypes = {
  handleSuccesfullAuth: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Registration;
