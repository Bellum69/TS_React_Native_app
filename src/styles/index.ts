import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
export const { width, height } = Dimensions.get("screen");

export const s = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    flex: 1,
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
  postButtonsWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: 50,
    bottom: 0,
    width: "100%",
    flexDirection: 'row',
  },
  postButtonText: {
    color: "white",
    fontSize: 20,
    alignSelf: 'center',
  },
  postChangeButton: {
    flex: 1,
    backgroundColor: "darkblue",
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    justifyContent: "center"
  },
  postDeleteButton: {
    flex: 1,
    backgroundColor: "red",
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    justifyContent: "center"
  },
  postAddCommentButton: {
    flex: 1,
    backgroundColor: "green",
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    justifyContent: "center"
  },
  user: {
    marginBottom: 10,
    alignSelf: "center",
    overflow: "hidden",
    width: "98%",
    borderRadius: 5,
    backgroundColor: "cornflowerblue",
  },
  userText: {
    fontSize: 20,
    marginLeft: 5,
    color: "white"
  },
  createTitle: {
    color: "black",
    fontSize: 20,
    paddingLeft: 10,
    alignSelf: "center"
  },
  picker: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "black",
    marginBottom: 20,
    width: "90%",
    alignSelf: "center",
  },
  pickerHome: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "black",
    marginTop: 5,
    marginBottom: 5,
    width: "100%",
    alignSelf: "center",
  },
  inputs: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 20,
    width: "90%",
    alignSelf: "center",
  },
  CreateButton: {
    width: "98%",
    height: 50,
    marginTop: 10,
    backgroundColor: "forestgreen",
    alignSelf: "center",
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  createButtonText: {
    color: "white",
    fontSize: 30,
    paddingLeft: 10,
  },

});
