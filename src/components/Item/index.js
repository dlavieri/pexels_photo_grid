import React from "react";
import StyledItem from "./Item.styled";

const Item = ({ name, ...rest }) => {
  return (
    <StyledItem {...rest}>
      <p>{name}</p>
    </StyledItem>
  );
};

export default Item;
