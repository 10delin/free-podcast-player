import { createSlice } from "@reduxjs/toolkit";

export const actualPodcastSlice = createSlice({
  name: "actualPodcast",
  initialState: "",
  reducers: {
    setActualPodcast: (state, action) => {
      return action.payload;
    },
  },
});

export const { setActualPodcast } = actualPodcastSlice.actions;
export default actualPodcastSlice.reducer;
