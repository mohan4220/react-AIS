import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/Home/About";
import { NotFound } from "./NotFound";
import { ProtectedRoute } from "./ProtectedRoute";
import Ais from '../Components/Ais';

class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/react-ais" component={Home} />
            <Route path="/react-ais/about" component={About} />
            <ProtectedRoute path= {"/react-ais/ais-data"} component ={Ais}/>
            <Route path ="*" component = {NotFound}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routes;
