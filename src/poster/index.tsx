import React from "react";
import { Switch, Route } from "react-router-dom";
import Grid from "../common/Grid";
import { fetchCollection } from "../common/api";
import Poster from "./poster";
import PosterItem from "./poster-item";

const Posters = ({ baseName }: { baseName: string }) => (
  <Switch>
    <Route
      path={`${baseName}/:id`}
      render={props => <PosterItem match={props.match} />}
    />
    <Route
      path="/"
      render={() => (
        <Grid fetcher={fetchCollection("products")}>
          <Poster />
        </Grid>
      )}
    />
  </Switch>
);

export default Posters;
