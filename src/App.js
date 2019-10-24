import React from "react";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Listings from "./containers/Listings";
import "./App.css";
// import Router from './Router'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Listings />
        {/* <Login /> */}
        {/* <Router /> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
