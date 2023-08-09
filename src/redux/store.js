import { configureStore } from "@reduxjs/toolkit";
import actualEpisodeReducer from "./reducers/actualEpisodeSlice";
import { podcastsApi } from "./features/podcastsApi";

const store = configureStore({
  reducer: {
    actualEpisode: actualEpisodeReducer,
    [podcastsApi.reducerPath]: podcastsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(podcastsApi.middleware),
});

export default store;
