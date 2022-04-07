import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { getCurrentUser } from './actions/currentUser.js'
import Navbar from './components/NavBar.js'
import MainContainer from './components/MainContainer.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
     <div>
       <Navbar/>
       <MainContainer/>
     
     </div>
    );
  }

}



export default connect(null, { getCurrentUser }) (App);