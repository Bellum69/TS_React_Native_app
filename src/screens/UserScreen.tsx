import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { ScrollView } from "react-native";
import { s } from "../styles";
import { Post } from "../components/";
import names from "../navigation/names";

import { newsSlice } from "../store/reducers/newsSlice";
import { API_POSTS } from "../config";

export const UserScreen = ({ navigation }: any) => {
  const [loading, setLoading] = useState<boolean>(true);
  const { getPosts } = newsSlice.actions;
  const dispatch = useAppDispatch();
  const allPosts = useAppSelector((state) => state.newsReducer.allPosts);

  useEffect(() => {
    if (loading) {
      fetch(API_POSTS)
        .then((response) => response.json())
        .then((data) => dispatch(getPosts(data)));
      setLoading(false);
    }
  }, [loading]);
  /*
  const onOpen = (post) => {
    navigation.navigate(names.Post, {
      postId: post.id,
    });
  };

  if (allPosts.length < 1) return null;

  const mappedPosts = allPosts.map((item) => (
    <Post key={item.id} post={item} onOpen={onOpen} />
  ));
*/
  return <ScrollView style={s.wrapper}>HomeScreen</ScrollView>;
};
