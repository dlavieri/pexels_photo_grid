import React from "react";
import { StyledImagePreview } from "../styled-components/Image.styled";

const Image = ({ photographer, imgUrl }) => {
  return (
    <StyledImagePreview imgUrl={imgUrl}>
      <caption>{photographer}</caption>
    </StyledImagePreview>
  );
};

export default Image;
