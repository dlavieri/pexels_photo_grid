import React from "react";
import StyledContainer from "./Container.styled";

const Container = ({ children, onDragOver, onDrop }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
