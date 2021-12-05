import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, ScrollView } from "react-native";
import { faHeartBroken, faCut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
//
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { newsSlice, selectAllComments } from "../store/reducers/newsSlice";
import { API_COMMENTS } from "../config";
//
import { IComment } from "../types";
import { s } from "../styles";
import { Comment } from "../components";

export const PostScreen = ({ route, navigation }: any) => {
  const { postData } = route.params;
  const storageComments = useAppSelector(selectAllComments);
  const { setComments, onPlusView, deletePost } = newsSlice.actions;
  const dispatch = useAppDispatch();

  const { comments, views } = postData;

  useEffect(() => {
    dispatch(onPlusView(postData.id));

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

  const onOkDeletingPost = () => {
    dispatch(deletePost(postData.id));
    navigation.goBack();
  };

  const onChangePost = () => {
    navigation.goBack();
  };

  const onDeletePost = () =>
    Alert.alert("Delete post alert", "Are you sure?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "YES",
        onPress: () => onOkDeletingPost(),
        style: "destructive",
      },
    ]);

  const mappedComments = comments.map((comment: IComment) => (
    <Comment key={comment.id} commentData={comment} />
  ));

  return (
    <ScrollView>
      <Text style={s.postTitle}>{postData.title}</Text>
      <Text style={s.postViewed}>Post viewed:{views}</Text>
      <View style={s.postTextWrap}>
        <Text style={s.postText}>{postData.body}</Text>
      </View>
      <View style={s.commentsWrap}>{mappedComments}</View>

      <View style={s.postButtonsWrap}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={s.postChangeButton}
          onPress={onChangePost}
        >
          <FontAwesomeIcon size={30} icon={faCut} color="white" />
          <Text style={s.postButtonText}>Change post?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={s.postDeleteButton}
          onPress={onDeletePost}
        >
          <FontAwesomeIcon size={30} icon={faHeartBroken} color="white" />
          <Text style={s.postButtonText}>Delete post?</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
