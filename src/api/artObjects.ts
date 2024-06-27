import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY || "YOUR_API_KEYP";

const getArtObjects = async ({
  pageParam,
  query,
  numberOfItemsPerPage = 4,
}: {
  pageParam: number;
  query: null | string;
  numberOfItemsPerPage?: number;
}) => {
  const response = await axios.get(
    `https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}&imgonly=True&ps=${numberOfItemsPerPage}&p=${pageParam}${query ? "&q=" + query : ""}`,
  );
  return response.data;
};

export default getArtObjects;
