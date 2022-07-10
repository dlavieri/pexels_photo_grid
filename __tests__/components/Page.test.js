import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../../src/components/Page";
import PhotosProvider from "../../src/providers/photosProvider";

const setup = ({ photos, loading }) => {
  render(
    <PhotosProvider value={{ perPage: 10 }}>
      <Page pageCount={2} photos={photos} loading={loading} />
    </PhotosProvider>
  );
};

const mockImg = {
  photographer: "Dummy Data",
  src: { medium: "..." },
  photographer_url: "...",
  alt: "...",
};

describe("<Page/>", () => {
  describe("when loading from API", () => {
    it("renders the appropriate number of loading images", () => {
      setup({ photos: [], loading: true });
      expect(screen.getAllByTestId("loading-image").length).toBe(10);
    });
  });

  describe("when recieves images  from API", () => {
    it("renders the appropriate number of loading images", () => {
      setup({ photos: Array(10).fill(mockImg), loading: false });
      expect(screen.getAllByTestId("photo").length).toBe(10);
    });
  });
});
