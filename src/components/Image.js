import React from "react";
import { StyledImagePreview } from "../styled-components/Image.styled";

const Image = ({ photographer, imgUrl }) => {
  return (
    <StyledImagePreview>
      <img alt="" src={imgUrl} />
      <caption>{photographer}</caption>
    </StyledImagePreview>
  );
};

export default Image;
