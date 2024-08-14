import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "USER",
  initialState: { value: { name: "kevin", age: 30, email: "kevin@gmail.com" } },
  reducers: {
    Login: (state, action) => {
      state.value = action.payload;
    },
  },
});
export default userSlice.reducer;
