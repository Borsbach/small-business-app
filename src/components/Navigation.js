import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  SnackbarContent
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

class Navigation extends Component {
  switchClick = () => {
    console.log('lfse', this.props)
    if (this.props.login) {
      this.props.authenticate(null, true);
    } else {
      this.props.authenticate(null, false);
    }
  };

  render() {
    console.log("props-nav", this.props);
    console.log("user", this.props.user.user)
    console.log('login', this.props.login)
    return (
      <div>
        <AppBar
          position="relative"
          style={{ background: "#3CB371", height: 75 }}
        >
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: "1" }}>
              Round Rock's Small Businesse's
            </Typography>
            <ul className="nav-list">
              <li className="nav-list-item">
                <Link to="/listing">Listings</Link>
              </li>
              <li className="nav-list-item">
                <Link to="/addlisting">Add Listing</Link>
              </li>
              <li className="nav-list-item">
                <Link onClick={this.switchClick} to="/Login">
                  {this.props.user.user ? "Logout" : "Login"}
                </Link>
              </li>
            </ul>
          </Toolbar>
        </AppBar>
        <SnackbarContent
          message={
            this.props.user.user
            ? `Logged in as: ${this.props.user.user.username}`
            : "Please Login "
          }
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: state.authentication.login
})

export default connect(mapStateToProps, null) (Navigation);


