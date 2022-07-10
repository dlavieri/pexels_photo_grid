import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";
import PhotosProvider from "./src/providers/photosProvider";

const container = document.getElementById("app");

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <PhotosProvider>
      <App />
    </PhotosProvider>
  </React.StrictMode>
);
