import { createSlice } from "@reduxjs/toolkit";

export const actualEpisodeSlice = createSlice({
  name: "actualEpisode",
  initialState: {
    data: "",
    isPlaying: false,
  },
  reducers: {
    setActualEpisode: (state, action) => {
      state.data = action.payload;
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    resetIsPlaying: (state) => {
      state.isPlaying = false;
    },
  },
});

export const { setActualEpisode, setIsPlaying, resetIsPlaying } =
  actualEpisodeSlice.actions;
export default actualEpisodeSlice.reducer;
