/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// State
interface FormData {
  position: string;
  company: string;
}

interface adminDataSliceState {
  formData: FormData;
}

const initialState: adminDataSliceState = {
  formData: {
    position: "",
    company: "",
  },
};

// Slice
export const adminDataSlice = createSlice({
  name: "adminData",
  initialState,
  reducers: {
    reset: () => initialState,
    setForm: (state, action: PayloadAction<FormData>) => {
      state.formData = action.payload;
    },
  },
});
