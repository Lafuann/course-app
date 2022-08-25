import { createSlice } from "@reduxjs/toolkit";

export const Register = createSlice({
  name: "Register",
  initialState: {
    step: 0,
    registerBy: "",
  },
  reducers: {
    changeRegisStep: (state, action) => {
      state.step = action.payload;
    },
    changeRegisterBy: (state, action) => {
      state.registerBy = action.payload;
    },
  },
});

export const { changeRegisStep, changeRegisterBy } = Register.actions;

export default Register.reducer;
