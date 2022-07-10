import styled from "styled-components";

export const StyledSearch = styled.div`
  border: 1px solid #4a4a4a;
  display: flex;
  margin: 10px 50px;
  border-radius: 25px;
  padding: 0 0 0 20px;
  align-items: center;
  overflow: hidden;

  img {
    height: 20px;
  }

  input {
    border: none;
    outline: none;
    height: 50px;
    flex: 1;
    font-size: 20px;
    font-family: sans-serif;
    padding: 0 1rem;
  }

  @media (max-width: 500px) {
    margin: 10px 20px;
  }
`;
