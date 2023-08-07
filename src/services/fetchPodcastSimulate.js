import axios from "axios";

const BASE_URL =
  "https://raw.githubusercontent.com/10delin/free-podcast-player.json/main/mockPodcasts.json";

export const fetchPodcastSimulate = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);

    if (response.status !== 200) {
      throw new Error("Error al obtener los detalles del podcast");
    }

    return response.data.podcasts;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
