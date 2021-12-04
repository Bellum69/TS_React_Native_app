import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { s } from "../styles";
import { IPostWithCustomData } from "../types";

interface IPostProps {
  postData: IPostWithCustomData;
  onOpen: (postData: IPostWithCustomData) => void;
}

export const Post: React.FC<IPostProps> = ({ postData, onOpen }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(postData)}>
      <View style={s.post}>
        <Text style={s.postName}>{`${postData.id} - ${postData.title}`}</Text>
      </View>
    </TouchableOpacity>
  );
};
