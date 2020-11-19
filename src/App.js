import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Person, PersonSwitcher } from "./components";
import "./App.css";

const firstPersion ="first-person"
const secondPersion ="second-person"
const App = () => (
  <Router>
    <>
      <PersonSwitcher />
      <Switch>
        <Route path="/" component={(props) => <Person type={firstPersion}  {...props} />} exact />
        <Route
          path="/first-person"
          component={(props) => <Person type={firstPersion} {...props} />}
          exact
        />
        <Route
          path="/second-person"
          component={(props) => <Person type={secondPersion} {...props} />}
          exact
        />
      </Switch>
    </>
  </Router>
);

export default App;
