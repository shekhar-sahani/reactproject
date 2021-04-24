import logo from "./logo.svg";
import "./App.css";
import Home from "./Home"; 
import skill from "./skill"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import port from "./port";
import contact from "./contact";

class App extends React.Component {
 
  render() {
    return (
      <>
        <Router>
          <div>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/skill" component={skill} />
              <Route exact path="/port" component={port} />
              <Route exact path="/contact" component={contact} />

              <Route exact path="*" component={Home} />
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}
export default App;
