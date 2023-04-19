export interface Author {
  firstName: string;
  lastName: string;
}

export interface Comment2Comment {
  author: Author;
  comment: number;
  content: string;
  date: Date;
}

export interface Comment {
  id: number;
  author: Author;
  post: number;
  content: string;
  date: Date;
  comments: Comment2Comment[];
}

export interface Post {
  author: Author;
  title: string;
  poster: string;
  description: string;
  content: string;
  creationDate: Date;
  updatedDate: Date;
  comments: Comment[];
}

export interface PostReduced {
  id: number;
  title: string;
  description: string;
  updatedDate: Date;
  poster: string;
}
