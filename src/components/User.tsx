import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { s } from "../styles";
import { IUserWithCustomData } from "../types";

interface IUserProps {
  userData: IUserWithCustomData;
  onOpen: (userData: IUserWithCustomData) => void;
}

export const User: React.FC<IUserProps> = ({ userData, onOpen }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(userData)}>
      <View style={s.user}>
        <Text style={s.userText}>
          {userData.id} - {userData.name}
        </Text>
        <Text style={s.userText}>
          Posts Created: {userData.createdPosts.length}
        </Text>
        <Text style={s.userText}>
          Comments: {userData.createdComments.length}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
