import { createSlice } from "@reduxjs/toolkit";

export const actualEpisodeSlice = createSlice({
  name: "actualEpisode",
  initialState: "",
  reducers: {
    setActualEpisode: (state, action) => {
      return action.payload;
    },
  },
});

export const { setActualEpisode } = actualEpisodeSlice.actions;
export default actualEpisodeSlice.reducer;
