import React from "react";
import Image from "./Image";
import Pagination from "./Pagination";
import LoadingSkeleton from "./LoadingSkeleton";
import { StyledPage, StyledGrid } from "../styled-components/Page.styled";
import { usePhotosContext } from "../providers/photosProvider";

const Page = ({ photos, loading, pageCount }) => {
  const { perPage } = usePhotosContext();

  return (
    <StyledPage>
      <StyledGrid>
        {loading || !photos ? (
          <LoadingSkeleton perPage={perPage} />
        ) : (
          photos.map((photo) => {
            return (
              <Image
                photographer={photo.photographer}
                imgUrl={photo.src.medium}
                photographerUrl={photo.photographer_url}
                altText={photo.alt}
                key={photo.alt}
              />
            );
          })
        )}
      </StyledGrid>
      <Pagination pageCount={pageCount} />
    </StyledPage>
  );
};

export default Page;
