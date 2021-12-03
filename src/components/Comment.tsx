import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { s } from "../styles";

export const Comment = ({ postId, onOpen }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(postId)}>
      <View style={s.post}>
        <Text>Name post</Text>
      </View>
    </TouchableOpacity>
  );
};
