import React, { useState } from "react";
import Image from "./Image";
import Pagination from "./Pagination";
import { StyledPage } from "../styled-components/Page.styled";

const Page = ({ photos, onPageSelect, currentPage, pageCount }) => {
  return (
    <StyledPage>
      {photos.map((photo) => {
        return (
          <Image
            photographer={photo.photographer}
            imgUrl={photo.src.medium}
            photographerUrl={photo.photographer_url}
          />
        );
      })}
      <Pagination
        onPageSelect={onPageSelect}
        currentPage={currentPage}
        pageCount={pageCount}
      />
    </StyledPage>
  );
};

export default Page;
