import React, { Component } from "react";
// import Nav from "./components/Nav";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link,
  Redirect
} from "react-router-dom";

//Pages
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import ForgotPassword from "./Pages/ForgotPassword";
import PasswordSent from "./Pages/PasswordSent";
import NotFoundPage from "./Pages/404";

class App extends Component {
  render() {
  return (
    <Router> 
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/ForgotPassword" component={ForgotPassword} />
          <Route exact path="/PasswordSent" component={PasswordSent} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404"/>
        </Switch>
      </Router>
  );    
  }  
  
}

export default App;
