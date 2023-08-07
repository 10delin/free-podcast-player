import { useEffect, useState } from "react";
import { fetchPodcastSimulate } from "../services/fetchPodcastSimulate";

export const usePodcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const podcastsData = await fetchPodcastSimulate();
        setPodcasts(podcastsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, []);

  return { podcasts, loading };
};
