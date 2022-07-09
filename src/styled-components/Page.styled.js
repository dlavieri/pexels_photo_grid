import styled from "styled-components";

export const StyledPage = styled.div`
  padding: 20px 50px;
`;

export const StyledGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media (max-width: 786px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media (max-width: 375px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;
