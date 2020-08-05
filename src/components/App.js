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

  checkLoginStatus() {
    axios.get("http://localhost:3001/logged_in", { withCredentials: true })
      .then( r => { 
        if(r.data.logged_in && this.props.loggedIn.status === 'NOT_LOGGED_IN') {
          const {addLog} = this.props;
          addLog(r.data);
        }
      })
      .catch(error => { console.log(error) });
  }

  componentDidMount() {
    this.checkLoginStatus();
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
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
