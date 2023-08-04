import { createSlice } from "@reduxjs/toolkit";

export const actualEpisodeSlice = createSlice({
  name: "actualEpisode",
  initialState: {
    data: "",
    isPlaying: false,
  },
  reducers: {
    setActualEpisode: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const { setActualEpisode, setIsPlaying } = actualEpisodeSlice.actions;
export default actualEpisodeSlice.reducer;
