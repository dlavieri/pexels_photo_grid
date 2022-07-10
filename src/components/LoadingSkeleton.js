import React from "react";
import { StyledImageLoading } from "../styled-components/LoadingSkeleton.styled";

const LoadingSkeleton = ({ perPage = 10 }) => {
  return [...Array(perPage)].map((e, i) => (
    <StyledImageLoading
      key={`loading_${i}`}
      delay={i * 100}
      data-testid="loading-image"
    />
  ));
};

export default LoadingSkeleton;
