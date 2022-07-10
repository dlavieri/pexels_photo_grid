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
`;

export const StyledPageButton = styled.button`
  color: ${({ selected }) => (selected ? "#ffffff" : "#4a4a4a")};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0 20px;
  font-weight: ${({ selected }) => (selected ? "bold" : "")};
  cursor: ${({ noCursor, selected }) =>
    noCursor || selected ? "default" : "pointer"};
  background-color: ${({ selected }) => (selected ? "#4a4a4a" : "#ffffff")};
  border: none;
  border-right: ${({ noBorder }) => (noBorder ? "" : "1px solid #4a4a4a")};
  border-top: 1px solid #4a4a4a;
  border-bottom: 1px solid #4a4a4a;

  :first-child {
    border-radius: 4px 0 0 4px;
    border: 1px solid #4a4a4a;
  }

  :last-child {
    border-radius: 0 4px 4px 0;
    border-right: 1px solid #4a4a4a;
  }
`;
