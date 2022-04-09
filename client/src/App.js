import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getCurrentUser } from './actions/currentUser.js'
import { getPlants } from './actions/plantActions.js'
import Navbar from './components/NavBar.js'
import Login from './components/user/Login.js'
import Home from './components/Home.js'
import Logout from './components/user/Logout.js'
import MyCart from './components/MyCart.js'
import PlantList from './components/plant/PlantList.js'
import '../src/App.css'

import MainContainer from './components/MainContainer.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.getPlants()
  }

  render() {
    return (
      <Router>
        <div className="App">
        <Navbar/>
         <Route exact path='/' component={Home}/>
         <Route exact path='/home' component={Home}/>
         <Route exact path='/login' component={Login}/>
         <Route exact path='/cart' component={MyCart}/>
         <Route exact path='/plants' component={PlantList}/>
        </div>
      </Router>
     
    );
  }

}



export default connect(null, { getCurrentUser, getPlants }) (App);