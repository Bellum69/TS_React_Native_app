import React from "react";
import { useAppSelector } from "../hooks/redux";
import { ScrollView } from "react-native";
import { newsSlice, reselectPosts } from "../store/reducers/newsSlice";
//
import names from "../navigation/names";
import { s } from "../styles";
import { Post } from "../components";
import { IPost } from "../types";

export const UserPostsScreen = ({ navigation, route }: any) => {
  const storagePosts = useAppSelector(reselectPosts);
  const { userData } = route.params;

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
