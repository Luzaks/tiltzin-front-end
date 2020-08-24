import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logginCreator } from '../Redux/actions/actions';
import Register from '../components/auth/Registration';
import Login from '../components/auth/Login';
import NavigationBar from '../components/Landing/NavBar';

function mapDispatchToProps(dispatch) {
  return {
    addLog: loggedIn => dispatch(logginCreator(loggedIn)),
  };
}

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showed: '',
    };
    this.handleSuccesfullAuth = this.handleSuccesfullAuth.bind(this);
    this.showForm = this.showForm.bind(this);
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

  showForm(formName) {
    const loginForm = (
      <Login
        handleSuccesfullAuth={this.handleSuccesfullAuth}
        onClick={() => this.setState({ showed: '' })}
      />
    );

    const registerForm = (
      <Register
        handleSuccesfullAuth={this.handleSuccesfullAuth}
        onClick={() => this.setState({ showed: '' })}
      />
    );

    if (formName === 'Sign in') return loginForm;
    if (formName === 'Sign Up') return registerForm;
    return null;
  }

  render() {
    const { showed } = this.state;
    return (
      <div className="landing-container">
        <NavigationBar
          onClick={ev => this.setState({ showed: ev.target.textContent })}
        />
        { this.showForm(showed) }
      </div>
    );
  }
}

LandingPage.propTypes = {
  addLog: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(null, mapDispatchToProps)(LandingPage);
