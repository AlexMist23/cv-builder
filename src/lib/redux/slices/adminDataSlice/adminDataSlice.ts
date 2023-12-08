/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// State
export interface adminDataSliceState {
  position: string;
  company: string;
}

const initialState = {
  position: "",
  company: "",
};

// Slice
export const adminDataSlice = createSlice({
  name: "adminData",
  initialState,
  reducers: {
    reset: () => initialState,
    setPosition: (state, action: PayloadAction<string>) => {
      state.position = action.payload;
    },
    setCompany: (state, action: PayloadAction<string>) => {
      state.company = action.payload;
    },
  },
});
