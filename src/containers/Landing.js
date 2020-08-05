import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { logginCreator } from '../Redux/actions/actions';
import Register from '../components/auth/Registration';
import Login from '../components/auth/Login';

function mapDispatchToProps(dispatch) {
  return {
    addLog: loggedIn => dispatch(logginCreator(loggedIn)),
  };
}

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.handleSuccesfullAuth = this.handleSuccesfullAuth.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleSuccesfullAuth(data) {
    const { history, addLog } = this.props;
    const state = {
      status: 'LOGGED_IN',
      user: data.user,
    };
    addLog(state);
    history.push('/dashboard');
  }

  handleLogOut() {
    const { history, addLog } = this.props;
    axios.delete('https://fierce-taiga-99651.herokuapp.com/logout', { withCredentials: true })
      .then(() => {
        const state = {
          status: 'NOT_LOGGED_IN',
          user: {},
        };
        addLog(state);
        history.push('/');
      }).catch(error => { console.log(error); });
  }

  render() {
    const { loggedInStatus } = this.props;
    const { status } = loggedInStatus;
    return (
      <div className="landing-container">
        <h1>Home</h1>
        <p>
          Status:
          {status}
        </p>
        <Register
          handleSuccesfullAuth={this.handleSuccesfullAuth}
        />
        <Login
          handleSuccesfullAuth={this.handleSuccesfullAuth}
        />
        <button
          type="submit"
          onClick={() => {
            this.handleLogOut();
          }}
        >
          Log out
        </button>
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
