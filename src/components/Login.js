import React, { Component } from 'react';
import {Button, TextField} from '@material-ui/core';
// import Dashboard from './components/Dashboard'
import Navigation from './Navigation'

class Login extends Component {
    state ={
      loggedIn: false
    }

    handleClick = () => {
      this.setState({ loggedIn: !this.state.loggedIn })
    }

  render() {
    if (this.state.loggedIn) {
      // return <Dashboard />
    } else {
  return (
    <div>
      <Navigation />
      <br />
      <form>
        <TextField className='username'
          id="standard-input"
          label="Username*"
          type="username"
          autoComplete="current-password"
          margin="normal"
        />
        <br />
        <TextField className='password'
          id="standard-password-input"
          label="Password*"
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <br />
        <Button onClick={this.handleClick} variant="contained" color="primary">
          Login
        </Button>
      </form>
    </div>
    )};
  }
}

export default Login;
