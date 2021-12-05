import moment from "moment";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import names from "../navigation/names";

import { s } from "../styles";
import { IComment } from "../types";

interface ICommentProps {
  commentData: IComment;
}

export const Comment: React.FC<ICommentProps> = ({ commentData }) => {
  return (
    <View style={s.comment}>
      <Text style={s.commentTitle}>
        {commentData.id} - {commentData.name}
        {commentData.userId && commentData.date
          ? `${"\n"}User - ${commentData.userId} - ${moment(
              commentData.date
            ).format("MMM Do YY")}`
          : null}
      </Text>
      <Text style={s.commentBody}>{commentData.body}</Text>
    </View>
  );
};
