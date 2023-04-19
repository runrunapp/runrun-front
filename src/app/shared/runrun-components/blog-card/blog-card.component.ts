import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogCardComponent implements OnInit {
  @Input() title!: string;
  @Input() date!: Date;


  constructor() { }

  ngOnInit(): void {
  }

}
