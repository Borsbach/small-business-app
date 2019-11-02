import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import {Button, TextField, Container} from '@material-ui/core';
// import Listings from '../components/Listings'

const Login = (props) =>  {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  
  
  const login = (e) => {
    e.preventDefault()
    document.cookie=
    'loggedIn=true;max-age = 60*1000'
    console.log(props.userLogin)
    props.userLogin(username)
    history.push("/listing")
  }
  
    // if (this.loggedIn) {
    //   return <Listings />
    // } else {
  return (
    <div className="login-form">
      <Container maxWidth="sm">
        <form onSubmit={login}>
          <TextField className="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            name="username"
            label="Username"
            required
            type="text"
          />
          <br />
          <TextField className="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
            label="Password"
            type="password"
            required 
            />
          <br />
          <Button type="submit" variant="contained" color="primary" className="login-button">
            Login
          </Button>
        </form>
      </Container>
    </div>
  )
}

export default Login;
