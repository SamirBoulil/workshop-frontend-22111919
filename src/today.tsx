import React from "react";

const Today = () => {
  const date = new Date();

  return <div>{date.toLocaleDateString()}</div>;
};

export default Today;
