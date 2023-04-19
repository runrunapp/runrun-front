import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogEntryComponent } from './blog-entry/blog-entry.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PostComponent } from './post/post.component';
import { MarkdownModule } from 'ngx-markdown';
import { CommentInputComponent } from './comment-input/comment-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommentComponent } from './comment/comment.component';
import { FormsModule } from '@angular/forms';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { KeepHtmlPipe } from './keep-html.pipe';

@NgModule({
  declarations: [
    BlogComponent,
    BlogEntryComponent,
    PostComponent,
    CommentInputComponent,
    CommentComponent,
    KeepHtmlPipe,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MarkdownModule.forChild(),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FooterModule
  ],
  providers: [

  ],
})
export class BlogModule {}
