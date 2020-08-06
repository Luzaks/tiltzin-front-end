import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import Routes from '../Router/Routes';
import { logginCreator } from '../Redux/actions/actions';
import '../styles/App.css';

const mapStateToProps = state => ({ loggedIn: state.loggedIn });

function mapDispatchToProps(dispatch) {
  return {
    addLog: loggedIn => dispatch(logginCreator(loggedIn)),
  };
}

class App extends React.Component {
  componentDidMount() {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    const { addLog, loggedIn } = this.props;
    const { status } = loggedIn;
    axios.get('https://fierce-taiga-99651.herokuapp.com/logged_in', { withCredentials: true })
      .then(r => {
        const { data } = r;
        const { logged_in } = data;
        console.log(data);

        if (logged_in && status === 'NOT_LOGGED_IN') {
          const state = {
            status: 'LOGGED_IN',
            user: r.data.user,
          };
          addLog(state);
        } else if (!logged_in && status === 'LOGGED_IN') {
          const state = {
            status: 'NOT_LOGGED_IN',
            user: {},
          };
          addLog(state);
        }
      })
      .catch(error => { console.log(error); });
  }

  render() {
    const { loggedIn } = this.props;

    return (
      <div className="App">
        <Routes
          loggedInStatus={loggedIn}
        />
      </div>
    );
  }
}

App.propTypes = {
  loggedIn: PropTypes.objectOf(PropTypes.any).isRequired,
  addLog: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
