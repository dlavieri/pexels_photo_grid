import React from "react";
import { StyledImagePreview } from "../styled-components/Image.styled";

const Image = ({ photographer, imgUrl, photographerUrl, altText }) => {
  return (
    <StyledImagePreview
      imgUrl={imgUrl}
      title={altText}
      aria-label={altText}
      data-testid="photo"
    >
      <div className="caption">
        <a href={photographerUrl} target="_blank" rel="noopener noreferrer">
          {photographer}
        </a>
      </div>
    </StyledImagePreview>
  );
};

export default Image;
