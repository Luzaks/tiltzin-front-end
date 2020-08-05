import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Register from '../components/auth/Registration';

// eslint-disable-next-line react/prefer-stateless-function
class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.handleSuccesfullAuth = this.handleSuccesfullAuth.bind(this);
  }

  handleSuccesfullAuth(data) {
    const { history } = this.props;
    history.push('/dashboard');
  }

  render() {
    const { loggedInStatus } = this.props;
    const { status, user } = loggedInStatus;
    return (
      <div>
        <h1>Home</h1>
        <p>
          Status:
          {status}
        </p>
        <Register
          handleSuccesfullAuth={this.handleSuccesfullAuth}
        />
      </div>
    );
  }
}

LandingPage.propTypes = {
  loggedInStatus: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.func.isRequired,
};

export default LandingPage;
