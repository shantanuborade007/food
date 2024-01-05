import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  pass: "",
  showPass: false
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    capturaLogin: (state, action) => {
      //console.log(state, action);
      const { email, pass } = action.payload;
      state.email = email;
      state.pass = pass;
    }
  }
});

export const { capturaLogin } = loginSlice.actions;
export default loginSlice.reducer;
