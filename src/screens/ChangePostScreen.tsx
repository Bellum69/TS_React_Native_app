import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { s } from "../styles";
import { useAppDispatch } from "../hooks/redux";
import { newsSlice } from "../store/reducers/newsSlice";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IPost } from "../types";
import names from "../navigation/names";

interface IChangePostData {
  title: string;
  body: string;
}

export const ChangePostScreen = ({ navigation, route }: any) => {
  const { changePost } = newsSlice.actions;
  const dispatch = useAppDispatch();

  const { postData } = route.params;

  const [changePostData, setChangePostData] = useState<IChangePostData>({
    title: postData.title,
    body: postData.body,
  });

  const onSubmit = (PostData: IPost): void => {
    navigation.navigate(names.Post, {
      postTitle: PostData.title,
      postData: PostData,
    });
  };

  const submitPost = () => {
    const postWithNewData = { ...postData, ...changePostData };
    dispatch(changePost({ ...changePostData, id: postData.id }));
    onSubmit(postWithNewData);
  };

  return (
    <View>
      <Text style={s.createTitle}>Change post - {postData.id}</Text>
      <TextInput
        style={s.inputs}
        placeholder="Title"
        onChangeText={(text) =>
          setChangePostData({ ...changePostData, title: text })
        }
        defaultValue={changePostData.title}
      ></TextInput>
      <TextInput
        style={s.inputs}
        placeholder="Add story"
        onChangeText={(text) =>
          setChangePostData({ ...changePostData, body: text })
        }
        defaultValue={changePostData.body}
        multiline
      ></TextInput>

      <TouchableOpacity
        activeOpacity={0.8}
        style={s.CreateButton}
        onPress={submitPost}
      >
        <FontAwesomeIcon size={30} icon={faPaperPlane} color="white" />
        <Text style={s.createButtonText}>Change the post</Text>
      </TouchableOpacity>
    </View>
  );
};
