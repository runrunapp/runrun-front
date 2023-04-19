import {
  Component,
  OnInit,
  Input,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AppState, AuthenticationSelectors } from 'src/app/root-store';
import { Post } from '../blog.models';
import { BlogService } from '../blog.service';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, AfterViewInit {
  post$!: Observable<Post>;
  id!: number;
  showResponseInput = 0;
  userAuthenticated$ = this.store.pipe(
    select(AuthenticationSelectors.selectIsLoggedIn)
  );

  @ViewChildren('postComments') postComments!: QueryList<ElementRef>;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.post$ = this.blogService.getPost(this.id);
    });
  }
  ngAfterViewInit(): void {
    this.postComments.changes.subscribe(() => {
      if (this.postComments && this.postComments.last) {
        this.postComments.last.nativeElement.focus();
      }
    });
  }

  onResponseButton(id: number): void {
    this.showResponseInput = id;
  }
  onPostComment(value: string): void {
    this.blogService.commentPost(this.id, value).subscribe({
      next: (_) => {
        this.toastr.success('Comentario enviado con exito');
        this.post$ = this.blogService.getPost(this.id);
      },
      error: (error) => {
        this.toastr.error(`Error al enviar el comentario: ${error}`);
      },
    });
  }
  onCommentComment(value: string, id: number): void {
    this.blogService.commentComment(id, value).subscribe({
      next: (_) => {
        this.toastr.success('Respuesta enviada con exito');
        this.post$ = this.blogService.getPost(this.id);
      },
      error: (error) => {
        this.toastr.error(`Error al enviar el comentario: ${error}`);
      },
    });
  }
}
