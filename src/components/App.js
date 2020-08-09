import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import Routes from '../Router/Routes';
import { logginCreator, destiniesCreator, tripsCreator } from '../Redux/actions/actions';
import getDestinies from '../api/getDestinies';
import getTrips from '../api/getTrips';
import '../styles/App.css';

const mapStateToProps = state => ({ loggedIn: state.loggedIn });

function mapDispatchToProps(dispatch) {
  return {
    addLog: loggedIn => dispatch(logginCreator(loggedIn)),
    handleGetDestinies: destinies => {
      dispatch(destiniesCreator(destinies));
    },
    handleGetTrips: trips => {
      dispatch(tripsCreator(trips));
    }
  };
}

class App extends React.Component {
  componentDidMount() {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    const { addLog, loggedIn } = this.props;
    const { status } = loggedIn;
    axios.get('http://localhost:3001/logged_in', { withCredentials: true })
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
    const { loggedIn, handleGetDestinies, handleGetTrips } = this.props;

    async function fetchData() {
      try {
        const destinies = await getDestinies();
        const trips = await getTrips();
        handleGetDestinies(destinies);
        handleGetTrips(trips);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }
    fetchData();

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
  handleGetDestinies: PropTypes.func.isRequired,
  handleGetTrips: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
