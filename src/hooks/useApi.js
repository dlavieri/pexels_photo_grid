import { useState, useEffect } from "react";
import { createClient } from "pexels";
import { API_KEY } from "../../api";

const useApi = (query, perPage, page) => {
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  const client = createClient(API_KEY);

  const handleResponse = (response) => {
    const count = Math.ceil(response.total_results / perPage);
    setPageCount(count);
    setPhotos(response.photos);
  };

  const fetchCuratedPhotos = async (perPage, page) => {
    setLoading(true);
    try {
      const response = await client.photos.curated({
        per_page: perPage,
        page,
      });
      handleResponse(response);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const fetchQueryPhotos = async (query, perPage, page) => {
    setLoading(true);
    try {
      const response = await client.photos.search({
        query,
        per_page: perPage,
        page,
      });
      handleResponse(response);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchQueryPhotos(query, perPage, page);
    } else {
      fetchCuratedPhotos(perPage, page);
    }
  }, [query, perPage, page]);

  return { loading, photos, pageCount };
};

export default useApi;
