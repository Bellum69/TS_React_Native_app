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
  comments: IComment[];
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  createdPosts: IPost[];
  createdComments: IComment[];
}

export interface INewsState {
  allPosts: IPost[];
  allComments: IComment[];
  allUsers: IUser[];
}

export interface IUserState {
  user: IUser | null;
  isAdmin: boolean;
}
