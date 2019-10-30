import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

class Navigation extends Component {
  render() { 
    return (
      <AppBar position="relative" style={{ background: '#3CB371'}}>
      <Toolbar>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            Round Rock's Small Businesse's
          </Typography> 
          {/* <Typography> 
            props.user && <p>loggedIn: {this.props.user}</p>
          </Typography> */}
            <ul className="nav-list">
              <li className="nav-list-item">
                <Link to="/">Listings</Link>
              </li>
              <li className="nav-list-item">
                <Link to="/">Add Listing</Link>
              </li>
              <li className="nav-list-item">
                <Link to="/login">{this.props.loggedIn ? "Login" : "Logout"}</Link>
              </li>
              {/* <li className="nav-list-item"
                  onClick={() => {
                  document.cookie = "loggedIn="
                  window.location.replace("/login")
                  }}>
                  Logout
              </li> */}
            </ul>
      </Toolbar>
    </AppBar>
    );
  }
}

export default Navigation;