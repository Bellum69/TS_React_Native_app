import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { ScrollView } from "react-native";
import { newsSlice, reselectPosts } from "../store/reducers/newsSlice";
//
import { API_POSTS } from "../config";
import names from "../navigation/names";
import { s } from "../styles";
import { Post } from "../components";
import { IPost } from "../types";

export const UserPostsScreen = ({ navigation, route }: any) => {
  const storagePosts = useAppSelector(reselectPosts);
  const { setPosts } = newsSlice.actions;
  const dispatch = useAppDispatch();
  const { userData } = route.params;

  useEffect(() => {
    if (storagePosts.length > 1) {
      return;
    }
    fetch(API_POSTS)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setPosts(data));
      });
  }, []);

  if (storagePosts.length < 1) return null;

  const onOpen = (postData: IPost): void => {
    navigation.navigate(names.Post, {
      postTitle: postData.title,
      postData: postData,
    });
  };

  const filteredPosts = storagePosts.filter(
    (post) => post.userId === userData.id
  );

  const mappedPosts = filteredPosts.map((post) => (
    <Post key={post.id} postData={post} onOpen={onOpen} />
  ));

  return <ScrollView style={s.wrapper}>{mappedPosts}</ScrollView>;
};
