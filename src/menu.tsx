import React from "react";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getIsLoading } from "./store";
import { useSelector } from "react-redux";

const Menu = () => {
  // const { isLoading } = useLoadingContext();
  const isLoading = useSelector(getIsLoading);
  return (
    <>
      <Link to="/posters">My posters</Link>
      <Link to="/customers">My customers</Link>
      <div>{isLoading && <CircularProgress />}</div>
    </>
  );
};

export default Menu;
