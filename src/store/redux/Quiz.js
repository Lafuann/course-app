import { createSlice } from "@reduxjs/toolkit";

export const Quiz = createSlice({
  name: "Quiz",
  initialState: {
    quizId: "",
  },
  reducers: {
    changeQuizId: (state, action) => {
      state.quizId = action.payload;
    },
  },
});

export const { changeQuizId } = Quiz.actions;

export default Quiz.reducer;
