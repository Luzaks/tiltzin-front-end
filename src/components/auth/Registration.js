import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { userCreator } from '../../Redux/actions/actions';

const Registration = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [conpass, setConpass] = useState('');
  const [registErrors, setRegistErrors] = useState('');

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
      console.log('registraton res', r);
    }).catch(error => {
      console.log('registration error', error);
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
