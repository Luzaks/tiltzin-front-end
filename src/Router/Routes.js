import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Landing from '../containers/Landing';
import Main from '../containers/Main';

const Routes = ({ loggedInStatus }) => {
  const checkLoggin = logStatus => {
    const dashboard = (
      <Route
        exact
        path="/dashboard"
        render={props => (
          <Main {...props} loggedInStatus={loggedInStatus} />
        )}
      />
    );

    if (logStatus === 'LOGGED_IN') return dashboard;
    return <div>Nothing to see here</div>;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <Landing {...props} />
          )}
        />
        {checkLoggin(loggedInStatus.status)}
      </Switch>
    </BrowserRouter>
  );
};

Routes.propTypes = {
  loggedInStatus: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Routes;
