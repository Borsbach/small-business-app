import React, { Component } from 'react';
import {Button, TextField, Container} from '@material-ui/core';
import Listings from '../components/Listings'

class Login extends Component {
  state ={
    username: '',
    password: '',
    loggedIn: false
  }

  handleTextChange = (e) => {
    const state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  handleClick = () => {
    this.setState({ loggedIn: !this.state.loggedIn })
  }

  login = (e) => {
    e.preventDefault()
    document.cookie = "loggedIn = true; max-age = 60*1000"
    window.location.replace("/")
  }

  render() {
    if (this.state.loggedIn) {
      return <Listings />
    } else {
  return (
    <div className="login-form">
      <Container maxWidth="sm">
        <form onSubmit={this.login}>
          <TextField 
            required
            onChange={this.handleTextChange}
            // value={this.state.username}
            className='username'
            label="Username"
            type="text"
            margin="normal"
          />
          <br />
          <TextField 
            required
            onChange={this.handleTextChange}
            // value={this.state.password}
            className='password'
            label="Password"
            type="password"
            margin="normal"
          />
          <br />
          <Button type="submit" variant="contained" color="primary" className="login-button">
            Login
          </Button>
        </form>
      </Container>
    </div>
    )};
  }
}

export default Login;
