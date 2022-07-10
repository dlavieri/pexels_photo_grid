import { useMemo } from "react";
import { range } from "lodash";

export const usePagination = ({ pageCount, currentPage }) => {
  const paginationRange = useMemo(() => {
    const siblingCount = 1;

    // plus five because first page, first ..., current page, second ..., and last page
    const totalShownPages = siblingCount + 5;

    if (totalShownPages >= pageCount) {
      return range(1, pageCount + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, pageCount);
    // show ellipses?
    const leftEllipses = leftSiblingIndex > 2;
    const rightEllipses = rightSiblingIndex < pageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = pageCount;

    // if no left ellipses, but right ellipses
    if (!leftEllipses && rightEllipses) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount + 1);

      return [...leftRange, "...", pageCount];
    }

    // if left ellipses, but no right ellipses
    if (leftEllipses && !rightEllipses) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(pageCount - rightItemCount + 1, pageCount + 1);
      return [firstPageIndex, "...", ...rightRange];
    }

    // if both sides ellipses
    if (leftEllipses && rightEllipses) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex + 1);
      return [firstPageIndex, "...", ...middleRange, "...", lastPageIndex];
    }
  });

  return paginationRange;
};

export default usePagination;
