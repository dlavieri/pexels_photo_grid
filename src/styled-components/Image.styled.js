import styled from "styled-components";

export const StyledImagePreview = styled.div`
  background-image: ${({ imgUrl }) => `url(${imgUrl})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  width: 300px;
`;
