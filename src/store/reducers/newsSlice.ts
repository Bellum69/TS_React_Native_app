import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { INewsState, IPostWithCustomData, IUserWithCustomData } from "../../types";
import { RootState } from "../index";

const selectAllPosts = (state: RootState) => state.news.allPosts;

export const selectAllComments = (state: RootState) => state.news.allComments;

const selectAllUsers = (state: RootState) => state.news.allUsers;


export const reselectPosts = createSelector(
  selectAllPosts,
  selectAllComments,
  (postList, commentsList): IPostWithCustomData[] => postList.map((post):IPostWithCustomData => {
    const postComments = commentsList.filter(comment => comment.postId === post.id)
    return {...post, comments: postComments, views: 0,}
  }
  ))

export const reselectUsers = createSelector(
    selectAllUsers, selectAllPosts, selectAllComments,
    (userList, postList, commentsList): IUserWithCustomData[] => userList.map((user):IUserWithCustomData => {
      const userPosts = postList.filter(post => post.userId === user.id)
      const userComments = commentsList.filter(comment => comment.userId === user.id)
      return { ...user, createdPosts: userPosts, createdComments: userComments }
    }
  ))

const initialState: INewsState = {
  allPosts: [],
  allComments: [],
  allUsers: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.allPosts = action.payload;
    },
    setComments(state, action) {
      state.allComments = action.payload;
    },
    setUsers(state, action) {
      state.allUsers = action.payload;
    },
    addPost(state, action) {
      state.allPosts.push(action.payload);
    },
    deletePost(state, action) {
      state.allPosts = state.allPosts.filter(
        (post) => post.id !== action.payload
      );
    },   
  },
});

export default newsSlice.reducer;
