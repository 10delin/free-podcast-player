import axios from "axios";

const BASE_URL = "https://itunes.apple.com";

const fetchItunesData = async (
  searchTerm = "podcast",
  country = "US",
  media = "podcast",
  limit = 50
) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        term: searchTerm,
        country: country,
        media: media,
        limit: limit,
      },
    });

    if (response.status !== 200) {
      throw new Error("Error al obtener los datos");
    }

    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetchItunesData;
