import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { ScrollView } from "react-native";
import { s } from "../styles";
import { Post } from "../components";
import names from "../navigation/names";

import { newsSlice } from "../store/reducers/newsSlice";
import { API_POSTS } from "../config";

export const UsersScreen = ({ navigation }: any) => {
  return <ScrollView style={s.wrapper}>UsersScreen</ScrollView>;
};
