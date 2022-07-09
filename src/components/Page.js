import React, { useState } from "react";
import Image from "./Image";
import Pagination from "./Pagination";
import LoadingSkeleton from "./LoadingSkeleton";
import { StyledPage, StyledGrid } from "../styled-components/Page.styled";

const Page = ({
  photos,
  onPageSelect,
  currentPage,
  pageCount,
  loading,
  perPage,
}) => {
  return (
    <StyledPage>
      <StyledGrid>
        {loading ? (
          <LoadingSkeleton perPage={perPage} />
        ) : (
          photos.map((photo) => {
            return (
              <Image
                photographer={photo.photographer}
                imgUrl={photo.src.medium}
                photographerUrl={photo.photographer_url}
                altText={photo.alt}
              />
            );
          })
        )}
        {/* {photos.map((photo) => {
          return (
            <Image
              photographer={photo.photographer}
              imgUrl={photo.src.medium}
              photographerUrl={photo.photographer_url}
              altText={photo.alt}
            />
          );
        })} */}
      </StyledGrid>
      <Pagination
        onPageSelect={onPageSelect}
        currentPage={currentPage}
        pageCount={pageCount}
      />
    </StyledPage>
  );
};

export default Page;
