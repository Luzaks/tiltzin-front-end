import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from '../containers/Landing';
import Main from '../containers/Main';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/dashboard" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
