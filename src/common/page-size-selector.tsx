import React, { ChangeEvent } from "react";

const PageSizeSelector = ({
  handlePageSizeChange
}: {
  handlePageSizeChange: (pageSize: number) => void;
}) => (
  <select
    onChange={(e: ChangeEvent<HTMLSelectElement>) => {
      handlePageSizeChange(parseInt(e.currentTarget.value));
    }}
  >
    <option value="10">10</option>
    <option value="20">20</option>
    <option value="30">30</option>
  </select>
);
export default PageSizeSelector;
