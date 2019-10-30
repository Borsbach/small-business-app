import React, { Component } from "react";
import Navigation from "./components/Navigation";
import "./App.css";
import Router from './Router'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

class App extends Component {
  state = {
    loggedIn: false
  }

  login = () => {
  const curState = this.state.loggedIn
  this.setState({loggedIn: !curState})
  }

  render() {
    return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation loggedIn={this.state.loggedIn} login={this.login} />
          <Router />
      </BrowserRouter>
    </Provider>
    )
  };
}

export default App;
