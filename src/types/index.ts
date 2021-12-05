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
  date?: Date; 
  views: number;
}

export interface IPostWithCustomData extends IPost {
  comments: IComment[];
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface IUserWithCustomData extends IUser {
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
