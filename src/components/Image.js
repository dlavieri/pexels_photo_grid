import React from "react";
import { StyledImagePreview } from "../styled-components/Image.styled";

const Image = ({ photographer, imgUrl, photographerUrl, altText }) => {
  return (
    <StyledImagePreview imgUrl={imgUrl} title={altText} aria-label={altText}>
      <caption>
        <a href={photographerUrl} target="_blank" rel="noopener noreferrer">
          {photographer}
        </a>
      </caption>
    </StyledImagePreview>
  );
};

export default Image;
