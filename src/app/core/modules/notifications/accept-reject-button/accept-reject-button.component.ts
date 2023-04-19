import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { URLs } from '../../../../app.constants';

@Component({
  selector: 'app-accept-reject-button',
  templateUrl: './accept-reject-button.component.html',
  styleUrls: ['./accept-reject-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcceptRejectButtonComponent implements OnInit {
  @Input() state: boolean | null = null;
  @Input() chatId!: number;
  @Output() accept = new EventEmitter();
  @Output() reject = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onAccept(): void {
    this.accept.emit();
  }
  onReject(): void {
    this.reject.emit();
  }

  chatURL = URLs.chatURL;
}
