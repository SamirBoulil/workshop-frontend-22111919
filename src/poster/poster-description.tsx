import React from "react";

export default ({
  price,
  width,
  height,
  description
}: {
  price: number;
  width: number;
  height: number;
  description: string;
}) => (
  <div>
    <span>
      {width}x{height}, ${price}
    </span>
    <span>{description}</span>
  </div>
);
