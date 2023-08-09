import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL =
  "https://raw.githubusercontent.com/10delin/free-podcast-player.json/main/mockPodcasts.json";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const podcastsApi = createApi({
  baseQuery,
  endpoints: (builder) => ({
    fetchPodcasts: builder.query({
      query: () => "",
      transformResponse: (response) => response.podcasts,
    }),
  }),
});

export const { useFetchPodcastsQuery } = podcastsApi;
