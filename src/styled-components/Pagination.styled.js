import styled from "styled-components";

export const StyledPaginationContainer = styled.div`
  width: 100%;
  display: flex;
  height: min-content;
  justify-content: end;
  overflow: auto;
`;

export const StyledPagination = styled.div`
  display: flex;
  max-width: 100%;
  margin-top: 20px;
  border: 1px solid #4a4a4a;
  border-radius: 4px;
  overflow: hidden;
`;

export const StyledPageButton = styled.button`
  color: ${({ selected }) =>
    selected ? "var(--brand-color-text)" : "#4a4a4a"};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0 20px;
  font-weight: ${({ selected }) => (selected ? "bold" : "")};
  cursor: ${({ noCursor, selected }) =>
    noCursor || selected ? "default" : "pointer"};
  background-color: ${({ selected }) => (selected ? "#097886" : "#000000")};
  border: none;
  border-right: ${({ noBorder }) => (noBorder ? "" : "1px solid #4a4a4a")};
`;
