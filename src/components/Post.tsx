import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useAppSelector } from "../hooks/redux";

import { s } from "../styles";
import { IPost, IPostProps } from "../types";

export const Post = ({ postData, onOpen }: IPostProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(postData)}>
      <View style={s.post}>
        <Text style={s.postName}>{`${postData.id} - ${postData.body}`}</Text>
      </View>
    </TouchableOpacity>
  );
};
