import React from 'react';
import { Link } from 'react-router-dom';
import { AuthHeader } from '../../styles/StyledComponents';

const NotLogged = () => (
  <div className="not-logged">
    <div className="not-logged-container">
      <AuthHeader>You need to login for see this content</AuthHeader>
      <Link
        to={{ pathname: '/' }}
      >
        <h5 className="main-link">go to main page</h5>
      </Link>
    </div>
  </div>
);

export default NotLogged;
