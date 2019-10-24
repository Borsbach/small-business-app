import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './containers/Home'
import About from './components/About'
import Car from './containers/Car'
import Dashboard from './containers/Dashboard'
import Login from './containers/Login'
import Listings from './containers/Listings'

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/listings/:id" component={Listings} />
      {/* <Route path="/dashboard" component={Dashboard} /> */}
      {/* <Route path="/import" component={Import} /> */}
    </Switch>
  );
};

export default Router;