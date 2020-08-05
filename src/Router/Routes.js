import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from '../containers/Landing';
import Main from '../containers/Main';
import Registration from '../components/auth/Registration';

const Routes = ({ loggedInStatus }) => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        render={props => (
          <Landing {...props} loggedInStatus={loggedInStatus} />
        )}
      />
      <Route
        exact
        path="/dashboard"
        render={props => (
          <Main {...props} loggedInStatus={loggedInStatus} />
        )}
      />
      <Route exact path="/signup" component={Registration} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
