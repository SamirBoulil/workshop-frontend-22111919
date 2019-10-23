import React from "react";
import Customer from "./customer";
import { Switch, Route } from "react-router-dom";
import { fetchCollection } from "../common/api";
import Grid from "../common/Grid";

const Customers = () => (
  <Switch>
    <Route
      path="/"
      render={() => (
        <Grid fetcher={fetchCollection("customers")}>
          <Customer />
        </Grid>
      )}
    />
  </Switch>
);

export default Customers;
