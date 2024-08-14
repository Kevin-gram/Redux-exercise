import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "USER",
  initialState: { value: { name: "kevin", age: 30, email: "kevin@gmail.com" } },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { login } = userSlice.actions;
export default userSlice.reducer;
