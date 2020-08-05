import React, { Component } from 'react';
import Register from '../components/auth/Registration';

// eslint-disable-next-line react/prefer-stateless-function
class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Register />
      </div>
    );
  }
}

export default LandingPage;
