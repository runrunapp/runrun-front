import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  AfterViewInit,
  EventEmitter,
  Output,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { URLs } from 'src/app/app.constants';
import { AppState, AuthenticationSelectors } from 'src/app/root-store';
import { Message } from 'src/app/root-store/chat-store/chat.models';
import { UsersActions, UsersSelectors } from 'src/app/root-store/users-store';
import { User, UserReduced } from '../../authentication/authentication.models';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent implements OnInit, AfterViewInit {
  @Input() sender!: UserReduced;
  @Input() receiver!: UserReduced;
  @Input() createdAt!: Date;
  @Input() text!: string;
  @Input() isFromUser = false;
  @Input() read!: boolean;
  @Output() markAsRead = new EventEmitter();
  container!: HTMLElement | null;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.container = document.getElementById('messagesContainer');
    if (this.container) {
      this.container.scrollTop = this.container.scrollHeight;
    }
  }

  onVisible(event: any): void {
    if (!this.read) {
      this.markAsRead.emit();
    }
  }

  userURL = URLs.userProfileURL;
}
