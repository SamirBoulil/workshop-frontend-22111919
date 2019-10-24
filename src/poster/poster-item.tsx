import React, { useContext } from "react";
import Poster from "./poster";
import { fetchItem } from "../common/api";
import { useParams, useRouteMatch } from "react-router";
import { useLoadingContext } from "../loading-context";
import { useSelector, useDispatch } from "react-redux";
import { getIsLoading, startLoading, stopLoading } from "../store";

const PosterItem = ({ match }: { match: { params: { id: string } } }) => {
  const [posterItem, setPosterItem] = React.useState({});
  // const { setIsLoading } = useLoadingContext(); // <-- Uses React.Context
  const dispatch = useDispatch();

  React.useEffect(() => {
    // setIsLoading(true);
    dispatch(startLoading);

    const fetchPosterItem = async () => {
      const posterItem = await fetchItem("products", match.params.id);
      setPosterItem(posterItem);
      dispatch(stopLoading);
    };
    fetchPosterItem();
  }, [posterItem]);

  return <Poster {...posterItem} />;
};

export default PosterItem;
