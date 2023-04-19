import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Author } from '../blog.models';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent implements OnInit {
  @Input() author!: Author;
  @Input() content!: string;
  @Input() date!: Date;
  @Input() commentId!: number;
  @Input() showResButton: boolean | null = true;
  @Output() response = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.response.emit(this.commentId);
  }
}
