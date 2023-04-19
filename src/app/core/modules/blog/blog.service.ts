import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post, PostReduced } from './blog.models';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/services/authentication.services';

const postAPI = `${environment.apiUrl}blog/`;
const postReducedAPI = `${environment.apiUrl}blog/reduced/`;
const postCommentAPI = `${environment.apiUrl}blog/post-comments/`;
const commentCommentAPI = `${environment.apiUrl}blog/comments-comments/`;

@Injectable({
  providedIn: 'root',
})
export class BlogService {


  constructor(private httpClient: HttpClient) {}

  getAllPost(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(postAPI);
  }
  getAllPostReduced(): Observable<PostReduced[]> {
    return this.httpClient.get<PostReduced[]>(postReducedAPI);
  }
  getPost(id: number) {
    return this.httpClient.get<Post>(`${postAPI}${id}/`);
  }

  commentPost(id: number, content: string) {

    return this.httpClient.post(
      postCommentAPI,
      { post: id, content: content },

    );
  }
  commentComment(id: number, content: string) {
    return this.httpClient.post(
      commentCommentAPI,
      { comment: id, content: content },

    );
  }
}
