import { Component, OnInit, SimpleChange, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostReduced } from './blog.models';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  posts!: Observable<PostReduced[]>;
  constructor(
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.posts = this.blogService.getAllPostReduced();
  }

  navigate(id: number): void {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
