import React from "react";

import { ScrollView, Text } from "react-native";
import { s } from "../styles";

export const AboutScreen = () => {
  return (
    <ScrollView style={s.wrapper}>
      <Text style={s.postText}>AboutScreen</Text>
    </ScrollView>
  );
};
