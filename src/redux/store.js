import { configureStore } from "@reduxjs/toolkit";

import ActualEpisodeReducer from "./reducers/actualEpisodeSlice";

const store = configureStore({
  reducer: {
    actualEpisode: ActualEpisodeReducer,
  },
});
export default store;
