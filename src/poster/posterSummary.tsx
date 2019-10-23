import React from "react";

export default ({
  expanded,
  reference
}: {
  expanded: boolean;
  reference: string;
}) => (!expanded ? <div>{reference}</div> : <div>Référence: {reference}</div>);
