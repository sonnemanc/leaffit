import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login.js"
import { getCurrentUser } from './actions/currentUser.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }


  render() {
    return (
      <Login/>
    );
  }

}

export default connect(null, { getCurrentUser }) (App);