import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, ScrollView } from "react-native";
import { faHeartBroken, faCut, faAd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
//
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { newsSlice, selectAllComments } from "../store/reducers/newsSlice";
import { API_COMMENTS } from "../config";
//
import { IComment } from "../types";
import { s } from "../styles";
import { Comment } from "../components";
import names from "../navigation/names";

export const PostScreen = ({ route, navigation }: any) => {
  const { postData } = route.params;
  const storageComments = useAppSelector(selectAllComments);
  const { setComments, onPlusView, deletePost } = newsSlice.actions;
  const dispatch = useAppDispatch();

  const { views } = postData;

  const filteredComments = storageComments.filter(
    (comment) => postData.id === comment.postId
  );

  useEffect(() => {
    dispatch(onPlusView(postData.id));

    if (storageComments?.length > 1) {
      return;
    }
    fetch(API_COMMENTS)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setComments(data));
      });
    console.log("fetch");
  }, []);

  const onOkDeletingPost = () => {
    dispatch(deletePost(postData.id));
    navigation.goBack();
  };

  const onChangePost = () => {
    navigation.goBack();
  };
  const onAddComment = () => {
    navigation.navigate(names.AddComment, {
      postData: postData,
    });
  };

  const onDeletePost = () =>
    Alert.alert("Delete post alert", "Are you sure?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "YES",
        onPress: () => onOkDeletingPost(),
        style: "destructive",
      },
    ]);

  return (
    <View style={s.wrapper}>
      <ScrollView>
        <Text style={s.postTitle}>{postData.title}</Text>
        <Text style={s.postViewed}>Post viewed:{views}</Text>
        {postData.date ? (
          <Text style={s.postViewed}>Post created: {postData.date}</Text>
        ) : null}
        <View style={s.postTextWrap}>
          <Text style={s.postText}>{postData.body}</Text>
        </View>
        <View style={s.commentsWrap}>
          {filteredComments
            ? filteredComments.map((comment: IComment) => (
                <Comment key={comment.id} commentData={comment} />
              ))
            : null}
        </View>
      </ScrollView>
      <View style={s.postButtonsWrap}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={s.postAddCommentButton}
          onPress={onAddComment}
        >
          <FontAwesomeIcon size={25} icon={faAd} color="white" />
          <Text style={s.postButtonText}>Add Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={s.postChangeButton}
          onPress={onChangePost}
        >
          <FontAwesomeIcon size={25} icon={faCut} color="white" />
          <Text style={s.postButtonText}>Change</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={s.postDeleteButton}
          onPress={onDeletePost}
        >
          <FontAwesomeIcon size={25} icon={faHeartBroken} color="white" />
          <Text style={s.postButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
