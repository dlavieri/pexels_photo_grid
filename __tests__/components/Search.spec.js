import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "../../src/components/Search";
import { photosCtx } from "../../src/providers/photosProvider";
import { act } from "react-dom/test-utils";

const mockSetQuery = jest.fn();

const setup = () => {
  render(
    <photosCtx.Provider value={{ setQuery: mockSetQuery }}>
      <Search />
    </photosCtx.Provider>
  );
};

jest.useFakeTimers();

describe("<Search />", () => {
  it("debounces search input", () => {
    setup();
    act(() => {
      fireEvent.change(screen.getByTestId("search"), {
        target: { value: "a" },
      });
      fireEvent.change(screen.getByTestId("search"), {
        target: { value: "asdsd" },
      });
      fireEvent.change(screen.getByTestId("search"), {
        target: { value: "dav" },
      });
    });
    act(() => {
      jest.runAllTimers();
    });

    expect(mockSetQuery).toHaveBeenCalledTimes(1);
  });
});
