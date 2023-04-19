import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogCardModule } from 'src/app/shared/runrun-components/blog-card/blog-card.module';
import { BlogComponent } from './blog.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: ':id', component: PostComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, BlogCardModule],
})
export class BlogRoutingModule {}
