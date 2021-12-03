export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
  date: Date;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  views: number;
  date: Date;
  comments: IComment[] | [];
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  createdPosts: IPost[] | [];
  createdComments: IComment[] | [];
}

export interface INewsState {
  allPosts: Promise<IPost | undefined> | IPost[];
  allComments: Promise<[]> | IComment[];
  allUsers: Promise<[]> | IUser[];
}

export interface IUserState {
  user: IUser | null;
  isAdmin: boolean;
}

export interface IPostProps {
  postData: IPost;
  onOpen: (postData: IPost) => void;
}
