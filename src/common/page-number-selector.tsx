import React, { ChangeEvent } from "react";
import _ from "lodash";

const PageNumberSelector = ({
  value,
  totalPages,
  onChange
}: {
  value: number;
  onChange: (pageNumber: number) => void;
  totalPages: number;
}) => {
  console.log(totalPages);
  const pages = _.range(totalPages).map(x => x + 1);

  return (
    <select
      onChange={(e: ChangeEvent<HTMLSelectElement>) =>
        onChange(parseInt(e.target.value))
      }
    >
      {pages.map(pageNumber => (
        <option
          key={pageNumber}
          value={pageNumber}
          selected={pageNumber === value}
        >
          {pageNumber}{" "}
        </option>
      ))}
    </select>
  );
};

export default PageNumberSelector;
