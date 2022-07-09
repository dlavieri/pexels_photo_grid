import styled, { keyframes } from "styled-components";

export const StyledImageLoading = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 6px;
  background-position: 0 0;
  background: linear-gradient(to right, #ced4da 25%, #f8f9fa 75%);
  animation-name: loading-shimmer;
  animation-delay: ${({ delay }) => (delay ? `${delay}ms` : "0")};
  animation-iteration-count: infinite;
  animation-duration: 2000ms;
  animation-direction: forwards;
  background-size: 300% 100%;

  @keyframes loading-shimmer {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 100% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  @media (max-width: 786px) {
    height: 200px;
    width: 200px;
  }

  @media (max-width: 375px) {
    height: 150px;
    width: 150px;
  }
`;
