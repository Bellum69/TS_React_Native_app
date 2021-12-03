import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { ScrollView } from "react-native";
import { s } from "../styles";
import { Post } from "../components/";
import names from "../navigation/names";

import { mainSlice } from "../store/reducers/mainSlice";

export const HomeScreen = ({ navigation }) => {
  const { getPosts } = mainSlice.actions;
  const dispatch = useAppDispatch();
  const allPosts = useAppSelector((state) => state.mainReducer.allPosts);
  useEffect(() => {}, []);
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
