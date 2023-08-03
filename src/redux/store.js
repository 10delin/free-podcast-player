import { configureStore } from "@reduxjs/toolkit";
import ActualPodcastReducer from "./reducers/actualPodcastSlice";

const store = configureStore({
  reducer: {
    actualPodcast: ActualPodcastReducer,
  },
});
export default store;
