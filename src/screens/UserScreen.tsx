import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { s } from "../styles";

export const UserScreen = ({ route }: any) => {
  const { postData } = route.params;

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

  return (
    <View>
      <Text style={s.postName}>{postData.title}</Text>
      <Text style={s.postText}>{postData.body}</Text>
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
