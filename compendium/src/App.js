import React, { Component } from "react";
// import Nav from "./components/Nav";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//Pages
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import NotFoundPage from "./Pages/404";

class App extends Component {
  render() {
  return (
    <Router> 
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/SignUp" component={SignUp} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404"/>
        </Switch>
      </Router>
  );    
  }  
  
}

export default App;
