import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { s } from "../styles";
import { IComment } from "../types";

interface ICommentProps {
  commentData: IComment;
}

export const Comment: React.FC<ICommentProps> = ({ commentData }) => {
  const onPressComment = () => {
    console.log("comment pressed");
  };
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPressComment}>
      <View style={s.comment}>
        <Text style={s.commentTitle}>
          {commentData.id} - {commentData.name}
        </Text>
        <Text style={s.commentBody}>{commentData.body}</Text>
      </View>
    </TouchableOpacity>
  );
};
