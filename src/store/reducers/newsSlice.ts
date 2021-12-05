import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { INewsState, IPost, IPostWithCustomData, IUserWithCustomData } from "../../types";
import { RootState } from "../index";

const selectAllPosts = (state: RootState) => state.news.allPosts;

export const selectAllComments = (state: RootState) => state.news.allComments;

export const selectAllUsers = (state: RootState) => state.news.allUsers;



export const reselectPosts = createSelector(
  selectAllPosts,
  selectAllComments,
  (postList, commentsList, ): IPostWithCustomData[] => postList.map((post):IPostWithCustomData => {
    const postComments = commentsList.filter(comment => comment.postId === post.id)

    return {...post, comments: postComments}
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
      state.allPosts = action.payload.map((post: IPost): IPost => {
        return { ...post, views: 0}
      });
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
    addComment(state, action) {
      state.allComments.push(action.payload);
    },
    deletePost(state, action) {
      state.allPosts = state.allPosts.filter(
        (post) => post.id !== action.payload
      );
      state.allComments = state.allComments.filter(
        (comment) => comment.postId !== action.payload
      );
    },
    onPlusView(state, action) {
      const postIndex = state.allPosts.findIndex(
        (post) => post.id === action.payload
      );
      state.allPosts[postIndex].views = state.allPosts[postIndex].views + 1;
    },
    changePost(state, action) {
      const postIndex = state.allPosts.findIndex(
        (post) => post.id === action.payload.id
      );
      state.allPosts[postIndex] = {...state.allPosts[postIndex], title:action.payload.title, body: action.payload.body};
    },
    changeComment(state, action) {
      const commentIndex = state.allComments.findIndex(
        (comment) => comment.id === action.payload.id
      );
      state.allComments[commentIndex] = {...state.allComments[commentIndex], name:action.payload.name, body: action.payload.body};
    },
  },
});

export default newsSlice.reducer;
