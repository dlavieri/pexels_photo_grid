import React from "react";
import {
  StyledPagination,
  StyledPageButton,
  StyledPaginationContainer,
} from "../styled-components/Pagination.styled";
import usePagination from "../../hooks/usePagination";

const Pagination = ({ onPageSelect, currentPage, pageCount }) => {
  if (pageCount <= 1) {
    return null;
  }

  const paginationRange = usePagination({ pageCount, currentPage });
  return (
    <StyledPaginationContainer>
      <StyledPagination data-testid="pagination">
        {currentPage !== 1 && (
          <StyledPageButton
            aria-label="Go to Previous Page"
            onClick={() => onPageSelect(currentPage - 1)}
          >
            Previous
          </StyledPageButton>
        )}
        {paginationRange.map((page, idx) => {
          const key = `${idx}page${page}`;
          if (page == "...") {
            return (
              <StyledPageButton key={key} noCursor>
                {page}
              </StyledPageButton>
            );
          }
          return (
            <StyledPageButton
              key={key}
              onClick={() => onPageSelect(page)}
              selected={page === currentPage}
              aria-label={`Go to Page ${page}`}
            >
              {page}
            </StyledPageButton>
          );
        })}
        {currentPage !== pageCount && (
          <StyledPageButton
            aria-label="Go to Next Page"
            onClick={() => onPageSelect(currentPage + 1)}
            noBorder
          >
            Next
          </StyledPageButton>
        )}
      </StyledPagination>
    </StyledPaginationContainer>
  );
};

export default Pagination;
