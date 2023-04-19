import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentInputComponent implements OnInit {
  @Input() label = 'Dejar un comentario';
  @Output() send = new EventEmitter<string>();

  content!: string;

  constructor() {}

  ngOnInit(): void {}

  onSend(): void {
    this.send.emit(this.content);
    this.content = '';
  }
}
