import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogEntryComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() date!: Date;
  @Input() poster!: string;
  constructor() {}

  ngOnInit(): void {}
}
