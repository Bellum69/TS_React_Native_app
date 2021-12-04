export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
  userId?: number;
  date?: Date;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostWithCustomData extends IPost {
  views: number;
  date?: Date;
  comments: IComment[];
}

export interface IUserApi {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface IUserWithCustomData extends IUserApi {
  createdPosts: IPost[];
  createdComments: IComment[];
}

export interface INewsState {
  allPosts: IPost[];
  allComments: IComment[];
  allUsers: IUserApi[];
}

export interface IUserState {
  user: IUserApi | null;
  isAdmin: boolean;
}
