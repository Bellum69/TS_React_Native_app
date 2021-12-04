import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    height: "100%",
    paddingBottom: 0,
  },
  post: {
    marginBottom: 10,
    alignSelf: "center",
    overflow: "hidden",
    width: "98%",
    borderRadius: 5,
    height: 50,
    backgroundColor: "orange",
  },
  postName: {
    fontSize: 20,
    marginLeft: 5,
  },
  postTitle: {
    fontSize: 30,
    alignSelf: 'center'
  },
  postViewed: {
    fontSize: 10,
    alignSelf: 'flex-end',
    color: "gray",
    marginRight: 5
  },
  postTextWrap: {
    borderTopWidth:  3,
    borderTopColor: 'black',
    paddingBottom: 10,
    borderBottomWidth:  3,
    borderBottomColor: 'black',
    marginBottom: 10
  },
  postText: {
    marginLeft: 10,
    fontSize: 20,
  },
  postDeleteButton: {
    marginTop: 10,
    backgroundColor: "red",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  postTextDeleteButton: {
    color: "white",
    fontSize: 30,
  },
  inputs: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "black",
    padding: 10,
    marginBottom: 20,
    width: "90%",
    alignSelf: "center",
  },
  commentsWrap: {
    borderBottomWidth:  3,
    borderBottomColor: 'black',
  },
  comment: {
    marginBottom: 10,
    alignSelf: "center",
    overflow: "hidden",
    width: "98%",
    borderRadius: 5,
  },
  commentTitle: {
    fontSize: 10,
    backgroundColor: 'orange',
    paddingLeft: 10,
  },
  commentBody: {
    fontSize: 15,
    backgroundColor: 'deepskyblue',
  },

});
