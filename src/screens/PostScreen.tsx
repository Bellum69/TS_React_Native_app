import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, ScrollView } from "react-native";
import { API_COMMENTS } from "../config";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { newsSlice, selectAllComments } from "../store/reducers/newsSlice";
import { s } from "../styles";
import { Comment } from "../components";
import { IComment, IPostWithCustomData } from "../types";

export const PostScreen = ({ route }: any) => {
  const { postData } = route.params;
  const storageComments = useAppSelector(selectAllComments);
  const { setComments } = newsSlice.actions;
  const dispatch = useAppDispatch();

  const { comments } = postData;

  useEffect(() => {
    if (storageComments?.length > 1) {
      return;
    }
    fetch(API_COMMENTS)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setComments(data));
      });
    console.log("fetch");
  }, []);

  const onDeletePost = () =>
    Alert.alert("Delete post alert", "Are you sure?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "YES",
        onPress: () => console.log("Yes Pressed"),
        style: "destructive",
      },
    ]);

  const mappedComments = comments.map((comment: IComment) => (
    <Comment key={comment.id} commentData={comment} />
  ));

  return (
    <ScrollView>
      <Text style={s.postTitle}>{postData.title}</Text>
      <View style={s.postTextWrap}>
        <Text style={s.postText}>{postData.body}</Text>
      </View>
      <View style={s.commentsWrap}>{mappedComments}</View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={s.postDeleteButton}
        onPress={onDeletePost}
      >
        <Text style={s.postTextDeleteButton}>Delete post?</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
