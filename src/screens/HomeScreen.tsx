import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { ScrollView, Text } from "react-native";
import { s } from "../styles";
import { Post } from "../components/";
import names from "../navigation/names";

import { newsSlice } from "../store/reducers/newsSlice";
import { API_POSTS } from "../config";
import { IPost } from "../types";

export const HomeScreen = ({ navigation }: any) => {
  const [allPosts, setAllPosts] = useState<IPost[]>([]);
  const storagePosts = useAppSelector((state) => state.newsReducer.allPosts);
  const { setPosts } = newsSlice.actions;
  const dispatch = useAppDispatch();
  console.log("new!!!!!!!!!");
  useEffect(() => {
    if (storagePosts.length < 10) {
      fetch(API_POSTS)
        .then((response) => response.json())
        .then((data) => {
          const mappedData = data.map((post: IPost) => {
            return { ...post, ...{ views: 0, comments: [] } };
          });
          setAllPosts(mappedData);
          dispatch(setPosts(mappedData));
        });
      console.log("fetch");
    } else {
      setAllPosts(storagePosts);
    }
  }, []);

  console.log(storagePosts);

  if (allPosts.length < 1) return null;

  const onOpen = (postData: IPost): void => {
    navigation.navigate(names.Post, {
      postTitle: postData.title,
      postData: postData,
    });
  };

  const mappedPosts = allPosts.map((post) => (
    <Post key={post.id} postData={post} onOpen={onOpen} />
  ));

  return <ScrollView style={s.wrapper}>{mappedPosts}</ScrollView>;
};
