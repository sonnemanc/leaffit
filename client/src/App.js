import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login.js"

class App extends React.Component {
  render() {
    return (
      <Login/>
    );
  }

}

export default App;