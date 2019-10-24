import React, { useContext } from "react";
import Poster from "./poster";
import { fetchItem } from "../common/api";
import { useParams, useRouteMatch } from "react-router";
import { useLoadingContext } from "../loading-context";

const PosterItem = ({ match }: { match: { params: { id: string } } }) => {
  const [posterItem, setPosterItem] = React.useState({});
  const { setIsLoading } = useLoadingContext();

  React.useEffect(() => {
    setIsLoading(true);

    const fetchPosterItem = async () => {
      const posterItem = await fetchItem("products", match.params.id);
      setPosterItem(posterItem);
      setIsLoading(false);
    };
    fetchPosterItem();
  }, [posterItem]);

  return <Poster {...posterItem} />;
};

export default PosterItem;
