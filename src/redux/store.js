import { configureStore } from "@reduxjs/toolkit";
import actualEpisodeReducer from "./reducers/actualEpisodeSlice";
import { podcastsApi } from "./features/podcastsApi";

const store = configureStore({
  reducer: {
    actualEpisode: actualEpisodeReducer,
    [podcastsApi.reducerPath]: podcastsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(podcastsApi.middleware), // Agrega el middleware de RTK Query
});

export default store;
