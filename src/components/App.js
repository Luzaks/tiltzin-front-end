import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getSessions from '../api/getSessions';
import Routes from '../Router/Routes';
import { logginCreator, destiniesCreator } from '../Redux/actions/actions';
import getDestinies from '../api/getDestinies';
import '../styles/App.css';

const mapStateToProps = state => ({ loggedIn: state.loggedIn });

function mapDispatchToProps(dispatch) {
  return {
    addLog: loggedIn => dispatch(logginCreator(loggedIn)),
    handleGetDestinies: destinies => {
      dispatch(destiniesCreator(destinies));
    },
  };
}

class App extends React.Component {
  componentDidMount() {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    const { addLog, loggedIn } = this.props;
    const { status } = loggedIn;
    getSessions(addLog, status);
  }

  render() {
    const { loggedIn, handleGetDestinies } = this.props;

    async function fetchData() {
      try {
        const destinies = await getDestinies();
        handleGetDestinies(destinies);
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
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
