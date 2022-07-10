import styled from "styled-components";

export const StyledImagePreview = styled.div`
  background-image: ${({ imgUrl }) => `url(${imgUrl})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  width: 300px;
  border-radius: 6px;
  position: relative;

  .caption {
    display: flex;
    justify-content: center;
    font-family: sans-serif;
    transition: all 300ms ease-in-out;
    opacity: 0;
    height: 0;
    width: 100%;
    height: 0;
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);

    a {
      color: #fff;
    }
  }

  :hover {
    .caption {
      opacity: 1;
      height: 60px;
    }
  }

  @media (max-width: 786px) {
    height: 200px;
    width: 200px;
  }

  @media (max-width: 500px) {
    height: 150px;
    width: 150px;
  }
`;
