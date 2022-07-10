import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pagination from "../../src/components/Pagination";
import { photosCtx } from "../../src/providers/photosProvider";

const setup = ({ currentPage, setCurrentPage, pageCount }) => {
  render(
    <photosCtx.Provider value={{ currentPage, setCurrentPage }}>
      <Pagination pageCount={pageCount} />
    </photosCtx.Provider>
  );
};

const setCurrentPage = jest.fn();

describe("<Pagination />", () => {
  describe("when there are no pages", () => {
    it("should render nothing", () => {
      setup({ currentPage: 1, setCurrentPage, pageCount: 0 });
      expect(screen.queryByTestId("pagination")).not.toBeInTheDocument();
    });
  });

  describe("when there are five or less pages", () => {
    it("should render component", () => {
      setup({ currentPage: 1, setCurrentPage, pageCount: 5 });
      expect(screen.queryByTestId("pagination")).toBeInTheDocument();
    });

    it("should render all page numbers", () => {
      setup({ currentPage: 1, setCurrentPage, pageCount: 5 });
      ["1", "2", "3", "4", "5"].forEach((page) => {
        expect(screen.getByText(page)).toBeInTheDocument();
      });
    });

    it("should render no ellipses", () => {
      setup({ currentPage: 1, setCurrentPage, pageCount: 5 });
      expect(screen.queryByText("...")).not.toBeInTheDocument();
    });
  });

  describe("when there are over five pages", () => {
    it("should render component", () => {
      setup({ currentPage: 3, setCurrentPage, pageCount: 10 });
      expect(screen.queryByTestId("pagination")).toBeInTheDocument();
    });

    describe("when current page is within the first three pages", () => {
      it("should render first five pages and last page", () => {
        setup({ currentPage: 3, setCurrentPage, pageCount: 10 });
        ["1", "2", "3", "4", "5", "10"].forEach((page) => {
          expect(screen.getByText(page)).toBeInTheDocument();
        });
      });

      it("should render one ellipses", () => {
        setup({ currentPage: 3, setCurrentPage, pageCount: 10 });
        expect(screen.getAllByText("...")).toHaveLength(1);
      });
    });

    describe("when current page is within the middle pages", () => {
      it("should render first and last page", () => {
        setup({ currentPage: 5, setCurrentPage, pageCount: 10 });
        expect(screen.getByText("1")).toBeInTheDocument();
        expect(screen.getByText("10")).toBeInTheDocument();
      });

      it("should render the middle sibling pages", () => {
        setup({ currentPage: 5, setCurrentPage, pageCount: 10 });
        expect(screen.getByText("4")).toBeInTheDocument();
        expect(screen.getByText("5")).toBeInTheDocument();
        expect(screen.getByText("6")).toBeInTheDocument();
      });

      it("should render two ellipses", () => {
        setup({ currentPage: 5, setCurrentPage, pageCount: 10 });
        expect(screen.getAllByText("...")).toHaveLength(2);
      });
    });

    describe("when current page is within the last three pages", () => {
      it("should render last five pages and first page", () => {
        setup({ currentPage: 10, setCurrentPage, pageCount: 10 });
        ["1", "6", "7", "8", "9", "10"].forEach((page) => {
          expect(screen.getByText(page)).toBeInTheDocument();
        });
      });

      it("should render one ellipses", () => {
        setup({ currentPage: 10, setCurrentPage, pageCount: 10 });
        expect(screen.getAllByText("...")).toHaveLength(1);
      });
    });
  });
});
