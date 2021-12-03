import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { INewsState } from "../../types";
const setData = async (value: any, key: string) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // saving error
  }
};

const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

const initialState: INewsState = {
  allPosts: [],
  allComments: [],
  allUsers: [],
};

export const newsSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    getPosts(state, action) {
      state.allPosts = action.payload;
      setData(action.payload, "allPosts");
    },
    deletePost(state, action) {
      state.allPosts = state.allPosts.filter(
        (post) => post.id !== action.payload
      );
      setData(state.allPosts, "allPosts");
    },
    addPost(state, action) {
      state.allPosts.push(action.payload);
      setData(state.allPosts, "allPosts");
    },
  },
});

export default newsSlice.reducer;
