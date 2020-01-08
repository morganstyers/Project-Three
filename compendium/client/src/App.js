import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import ForgotPassword from "./Pages/ForgotPassword";
import PasswordSent from "./Pages/PasswordSent";
import NotFoundPage from "./Pages/404";
import aboutUs from "./Pages/About";
import collections from './Pages/Collections';

import yourAccount from './Pages/Account';
import Rocks from './Pages/Rocks';

import yourAccount from './Pages/Account'
import Catalogue from './components/Catalogue/Catalogue';

class App extends Component {
  render() {
    const styles = {
      fontFamily: "sans-serif",
      textAlign: "center"
    };
  return (
    <div style={styles}>
    <Router> 
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/ForgotPassword" component={ForgotPassword} />
          <Route exact path="/PasswordSent" component={PasswordSent} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/404" component={NotFoundPage} />
          <Route exact path="/About" component={aboutUs} />
          <Route exact path="/Collections" component={collections} />
          <Route exact path="/Account" component={yourAccount} />

          <Route exact path="/Rocks" component={Rocks} />

          <Route exact path="/Catalogue" component={Catalogue} />





          <Redirect to="/404"/>
        </Switch>
      </Router>
      </div>
  );    
  }  
  
}

export default App;
