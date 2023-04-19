import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/root-store';
import { environment } from 'src/environments/environment';
import { BaseRunroomiePost } from './runroomie.models';

@Injectable({
  providedIn: 'root',
})
export class RunroomieService {
  apiURL = environment.apiUrl + 'runroomie/';

  constructor(private http: HttpClient) {}

  shareListing(listing: number, comment: string) {
    return this.http.post(this.apiURL + 'posts/', {
      listing,
      comment,
    });
  }
  removePost(post: number) {
    return this.http.delete(this.apiURL + `posts/${post}` )
  }

  getPosts() {
    return this.http.get<{results: BaseRunroomiePost[]}>(this.apiURL + 'posts/').pipe(map(results => results.results));
  }

  likePost(id: number) {
    return this.http.post(`${this.apiURL}posts/${id}/like_post/`, {});
  }
  dislikePost(id: number) {
    return this.http.post(`${this.apiURL}posts/${id}/dislike_post/`, {});
  }
}
