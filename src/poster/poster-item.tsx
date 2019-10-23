import React from "react";
import Poster from "./poster";
import { fetchItem } from "../common/api";
import { useParams, useRouteMatch } from "react-router";

const PosterItem = ({ match }: { match: { params: { id: string } } }) => {
  const [posterItem, setPosterItem] = React.useState({});
  React.useEffect(() => {
    const fetchPosterItem = async () => {
      const posterItem = await fetchItem("products", match.params.id);
      setPosterItem(posterItem);
    };
    fetchPosterItem();
  }, [posterItem]);

  return <Poster {...posterItem} />;
};

export default PosterItem;
