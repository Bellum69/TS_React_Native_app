import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import { newsSlice } from "../store/reducers/newsSlice";
import { s } from "../styles";

export const PostScreen = ({ route }) => {
  const { postId } = route.params;
  const { deletePost } = newsSlice.actions;

  const dispatch = useDispatch();

  const onDeletePost = () =>
    Alert.alert("Delete post alert", "Are you sure?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "YES",
        onPress: () => dispatch(deletePost(postId)),
        style: "destructive",
      },
    ]);

  return (
    <View>
      <Text style={s.postName}>postName</Text>
      <Text style={s.postText}> Post text</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={s.postDeleteButton}
        onPress={onDeletePost}
      >
        <Text style={s.postTextDeleteButton}>Delete post?</Text>
      </TouchableOpacity>
    </View>
  );
};
