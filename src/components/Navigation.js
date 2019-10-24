import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

class Navigation extends Component {
  state = { }

  render() { 
    return (
      <AppBar position="relative" style={{ background: '#3CB371'}}>
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            Round Rock's Small Businesse's
          </Typography>
            <ul className="nav-list">
              <li className="nav-list-item">
                <Link to="/">Listings</Link>
              </li>
              <li className="nav-list-item">
                <Link to="/about">Login</Link>
              </li>
              {/* <li className="nav-list-item">
                <Link to="/dashboard">Log-out</Link>
              </li> */}
            </ul>
      </Toolbar>
    </AppBar>
    );
  }
}

export default Navigation;