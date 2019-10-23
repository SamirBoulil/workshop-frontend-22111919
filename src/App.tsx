import React from "react";
import "./App.css";
import Customers from "./customers";
import Posters from "./poster";
import { BrowserRouter, Link, Switch, Redirect, Route } from "react-router-dom";

const NoMatch = () => <h1>404</h1>;
const App: any = () => (
  <BrowserRouter>
    <Link to="/posters">My posters</Link>
    <Link to="/customers">My customers</Link>

    <Switch>
      <Redirect exact from="/" to="/posters" />
      <Route
        path="/posters"
        render={match => {
          console.log(match);
          return <Posters baseName="/posters" />;
        }}
      />
      <Route
        path="/customers"
        render={match => {
          console.log(match);
          return <Customers />;
        }}
      />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
);

export default App;
