import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { ScrollView } from "react-native";
import { s } from "../styles";
import { Post } from "../components/";
import names from "../navigation/names";
import { newsSlice, reselectPosts } from "../store/reducers/newsSlice";
import { API_POSTS } from "../config";
import { IPost } from "../types";

export const HomeScreen = ({ navigation }: any) => {
  const storagePosts = useAppSelector(reselectPosts);
  const { setPosts } = newsSlice.actions;
  const dispatch = useAppDispatch();

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

  const mappedPosts = storagePosts.map((post) => (
    <Post key={post.id} postData={post} onOpen={onOpen} />
  ));

  return <ScrollView style={s.wrapper}>{mappedPosts}</ScrollView>;
};
