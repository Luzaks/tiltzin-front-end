import React, { Component } from 'react';
import PropTypes  from 'prop-types';
import Register from '../components/auth/Registration';

// eslint-disable-next-line react/prefer-stateless-function
class LandingPage extends Component {
  render() {
    const { loggedInStatus } = this.props;
    const { status, user } = loggedInStatus;
    return (
      <div>
        <h1>Home</h1>
        <p>Status: {status}</p>
        <Register />
      </div>
    );
  }
}


LandingPage.propTypes = {
  loggedInStatus: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default LandingPage;
