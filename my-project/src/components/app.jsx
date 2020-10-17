import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";


import Main from "./main";
import Jimi from "./jimi";
import Johnny from "./johnny";
import Madonna from "./madonna";
import Pink from "./pink";
// import NewArt from "./newArt"
import NotFound from './pageNotFound';

class App extends Component {
  state = {
  };

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/notFound" component={NotFound} />
          <Route path="/jimi_hendrix" component={Jimi} />
          <Route path="/johnny_cash" component={Johnny} />
          <Route path="/madonna" component={Madonna} />
          <Route path="/pink_floyd" component={Pink} />
          {/* <Route path="/newArt" component={NewArt} /> */}
          <Redirect from="/home" to="/" />
          <Redirect to="/notFound" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
