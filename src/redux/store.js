import { configureStore } from "@reduxjs/toolkit";
import actualEpisodeReducer from "./reducers/actualEpisodeSlice";

const store = configureStore({
  reducer: {
    actualEpisode: actualEpisodeReducer,
  },
});

export default store;
