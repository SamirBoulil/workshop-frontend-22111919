import React, { ChangeEvent } from "react";

type ComplexOption = { value: number; text: string };
type Option = ComplexOption | Number;
type PageSelectorProps = {
  onChange: (pageNumber: number) => void;
  value: number;
  options: Array<Option>;
};

const PageSelector = ({ value, options, onChange }: PageSelectorProps) => (
  <select
    onChange={(e: ChangeEvent<HTMLSelectElement>) => {
      onChange(parseInt(e.currentTarget.value));
    }}
  >
    {options.map((optionValue: Option) => {
      const theValue =
        (optionValue as ComplexOption).value === undefined
          ? Number(optionValue)
          : (optionValue as ComplexOption).value;
      const theLabel =
        (optionValue as ComplexOption).value === undefined
          ? optionValue
          : (optionValue as ComplexOption).text;

      return (
        <option value={theValue} selected={value === theValue}>
          {theLabel}
        </option>
      );
    })}
  </select>
);

export default PageSelector;
