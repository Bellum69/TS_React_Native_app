import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { ScrollView, View } from "react-native";
import { newsSlice, reselectPosts } from "../store/reducers/newsSlice";
//
import { API_POSTS } from "../config";
import names from "../navigation/names";
import { s } from "../styles";
import { Post } from "../components/";
import { IPostWithCustomData } from "../types";
import { Picker } from "@react-native-picker/picker";

export const HomeScreen = ({ navigation }: any) => {
  const [selectedFilter, setSelectedFilter] = useState("views");
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

  const onOpen = (postData: IPostWithCustomData): void => {
    navigation.navigate(names.Post, {
      postTitle: postData.title,
      postData: postData,
    });
  };

  const sortedPosts = storagePosts.sort((firstPost, secondPost) => {
    if (selectedFilter === "views") {
      if (firstPost.views > secondPost.views) {
        return -1;
      }
      if (firstPost.views < secondPost.views) {
        return 1;
      }
      return 0;
    } else if (selectedFilter === "date") {
      if (firstPost.date > secondPost.date) {
        return -1;
      }
      if (firstPost.date < secondPost.date) {
        return 1;
      }
      return 0;
    } else if (selectedFilter === "comments") {
      if (firstPost.comments.length > secondPost.comments.length) {
        return -1;
      }
      if (firstPost.comments.length < secondPost.comments.length) {
        return 1;
      }
      return 0;
    }
    return 0;
  });

  return (
    <View style={s.wrapper}>
      <Picker
        selectedValue={selectedFilter}
        onValueChange={(itemValue) => setSelectedFilter(itemValue)}
        style={s.pickerHome}
      >
        <Picker.Item label={"MOST VIEWED"} value="views" />
        <Picker.Item label={"MOST COMMENTED"} value="comments" />
        <Picker.Item label={"LATEST"} value="date" />
      </Picker>

      <ScrollView>
        {sortedPosts.map((post) => (
          <Post key={post.id} postData={post} onOpen={onOpen} />
        ))}
      </ScrollView>
    </View>
  );
};
