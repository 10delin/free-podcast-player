import axios from "axios";

const BASE_URL = "https://itunes.apple.com";

const fetchPodcastDetails = async (trackId, country = "US") => {
  try {
    const response = await axios.get(`${BASE_URL}/lookup`, {
      params: {
        id: trackId,
        country: country,
        media: "podcast",
      },
    });

    if (response.status !== 200) {
      throw new Error("Error al obtener los detalles del podcast");
    }

    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetchPodcastDetails;
