import { useState, useEffect } from "react";
import { createClient } from "pexels";
import { API_KEY } from "../../api";

const useApi = ({ query, perPage }) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);
  const [error, setError] = useState();

  const client = createClient(API_KEY);

  const fetchCuratedPhotos = async (perPage, page) => {
    try {
      const response = await client.photos.curated({
        per_page: perPage,
        page,
      });
      setResponse(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchQueryPhotos = async (query, perPage, page) => {
    try {
      const response = client.photos.search({
        query,
        per_page: perPage,
        page,
      });
      setResponse(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchQueryPhotos(query, perPage, currentPage);
    } else {
      fetchCuratedPhotos(perPage, currentPage);
    }
  }, [query, perPage, currentPage]);

  return { loading, response, error };
};

export default useApi;
