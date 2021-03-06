import React from "react";

import { ScrollView, Text } from "react-native";
import { s } from "../styles";

export const AboutScreen = () => {
  return (
    <ScrollView style={s.wrapper}>
      <Text style={s.postTitle}>
        Technologies Stack:{"\n"}
        React-Native{"\n"}
        TypeScript{"\n"}
        Redux: Toolkit/Persist/Reselect{"\n"}
        {"\n"}
        Creator - Edward Bellum{"\n"}
        GitHub: Bellum69
      </Text>
    </ScrollView>
  );
};
