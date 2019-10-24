import React from "react";
import styled from "styled-components";

const CustomerInfo = styled.span`
  margin: 0 5px;
  font-family: "Courier New", Courier, monospace;
`;

type CustomerProps =
  | {
      id: string;
      first_name: string;
      last_name: string;
      avatar: string;
    }
  | any;
const Customer = ({ id, avatar, first_name, last_name }: CustomerProps) => (
  <div key={id}>
    <img src={avatar} alt="The " />
    <CustomerInfo>{first_name}</CustomerInfo>
    <CustomerInfo>{last_name}</CustomerInfo>
  </div>
);
Customer.defaultProps = {
  id: "",
  first_name: "",
  last_name: "",
  avatar: ""
};

export default Customer;
