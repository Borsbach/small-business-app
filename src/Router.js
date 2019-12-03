import React from 'react'
import { Switch, Route } from 'react-router'
import Login from './containers/Login'
import Listings from './containers/Listings'
import Details from './components/Details'
import AddListing from './components/AddListing'

const Router = () => {
  return (
    <Switch>
      <Route exact path="/listing" component={Listings} />
      <Route path="/login" component={Login} />
      <Route path="/listing/:id" component={Details} />
      <Route path="/addlisting" component={AddListing} />
    </Switch>
  );
};

export default Router;