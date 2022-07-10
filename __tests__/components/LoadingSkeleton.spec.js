import React from "react";
import { render, screen } from "@testing-library/react";
import LoadingSkeleton from "../../src/components/LoadingSkeleton";

describe("<LoadingSkeleton/>", () => {
  it("renders the appropriate number of loading images", () => {
    render(<LoadingSkeleton perPage={10} />);

    expect(screen.getAllByTestId("loading-image").length).toBe(10);
  });
});
