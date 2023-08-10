import { createSlice } from "@reduxjs/toolkit";
import { setLocalStorageItem } from "../../utils/localStorageData";

export const actualEpisodeSlice = createSlice({
  name: "actualEpisode",
  initialState: {
    data: "",
    isPlaying: false,
  },
  reducers: {
    setActualEpisode: (state, action) => {
      state.data = action.payload;
      setLocalStorageItem("actualEpisode", action.payload);
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
