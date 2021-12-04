import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../../types";

const initialState: IUserState = {
  user: null,
  isAdmin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSignification(state) {
      state.isAdmin = !state.isAdmin;
    },
  },
});

export default userSlice.reducer;
