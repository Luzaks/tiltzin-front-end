import React from 'react';
import PropTypes  from 'prop-types';


const Main = ({loggedInStatus}) => (
  <div>
    <h1>Dashboard</h1>
    <p>Status: {loggedInStatus.status}</p>
  </div>
);

Main.propTypes = {
  loggedInStatus: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Main;
