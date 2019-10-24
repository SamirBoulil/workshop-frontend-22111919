import React, { createContext, useContext, useState } from "react";
import "./App.css";
import Customers from "./customers";
import Posters from "./poster";
import { BrowserRouter, Link, Switch, Redirect, Route } from "react-router-dom";
import Menu from "./menu";
import { LoadingProvider } from "./loading-context";
import { store } from "./store";
import { Provider } from "react-redux";

const NoMatch = () => <h1>404</h1>;
const App: any = () => {
  return (
    // @ts-ignore
    <LoadingProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Menu />
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
      </Provider>
    </LoadingProvider>
  );
};

export default App;
