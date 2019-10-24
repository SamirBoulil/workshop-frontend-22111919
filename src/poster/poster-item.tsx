import React from "react";
import Poster from "./poster";
import { fetchItem } from "../common/api";
import { startLoading, stopLoading } from "../store";
import { useDispatch } from "react-redux";

const PosterItem = ({ match }: { match: { params: { id: string } } }) => {
  const [posterItem, setPosterItem] = React.useState({});
  // const { setIsLoading } = useLoadingContext(); // <-- Uses React.Context
  const dispatch = useDispatch();
  dispatch(startLoading);

  React.useEffect(() => {
    // setIsLoading(true);

    const fetchPosterItem = async () => {
      const posterItem = await fetchItem("products", match.params.id);
      setPosterItem(posterItem);
      dispatch(stopLoading);
    };
    fetchPosterItem();
  }, [dispatch, match.params.id, posterItem]);

  return <Poster {...posterItem} />;
};

export default PosterItem;
