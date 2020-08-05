import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logginCreator } from '../Redux/actions/actions';
import Register from '../components/auth/Registration';

function mapDispatchToProps(dispatch) {
  return {
    addLog: loggedIn => dispatch(logginCreator(loggedIn)),
  };
}

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.handleSuccesfullAuth = this.handleSuccesfullAuth.bind(this);
  }

  handleSuccesfullAuth(data) {
    const { history, addLog } = this.props;
    addLog(data);
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
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  addLog: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LandingPage);
