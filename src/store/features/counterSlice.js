import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  serachValue: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeserachValue: (state, actions) => {
      return { state, ...{ serachValue: actions.payload } };
    },
  },
});

export const { changeserachValue } = counterSlice.actions;

export default counterSlice.reducer;





// how same submission can added to different proces type