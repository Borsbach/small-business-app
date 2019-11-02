import React from 'react'
import { AppBar, Toolbar, Typography, SnackbarContent} from '@material-ui/core'
import { Link } from 'react-router-dom'

const Navigation = (props) => {
    return (
      <div>
      <AppBar position="relative" style={{ background: '#3CB371'}}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            Round Rock's Small Businesse's
          </Typography> 
            <ul className="nav-list">
              <li className="nav-list-item">
                <Link to="/">Listings</Link>
              </li>
              <li className="nav-list-item">
                <Link to="/addlisting">Add Listing</Link>
              </li>
              <li className="nav-list-item">
                <Link to="/login">{props.loggedIn ? "Logout" : "Login"}</Link>
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
      <SnackbarContent> 
        {props.loggedIn && <p>loggedIn: {props.user.username}</p>}
      </SnackbarContent>
    </div>
    );
  }


export default Navigation;