import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from '../containers/Landing';
import Main from '../containers/Main';
import Registration from '../components/auth/Registration';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/dashboard" component={Main} />
      <Route exact path="/signup" component={Registration} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
