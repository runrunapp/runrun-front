import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { ChatService } from 'src/app/core/modules/chat/chat.service';
import { ChatActions } from '.';



@Injectable()
export class ChatEffects {

  fetchSessionsEffect$ = createEffect(() => this.actions$.pipe(
    ofType(ChatActions.requestSessions),
    map(actions => {
        this.chatService.requestChatSessions()
    })
  ), {dispatch: false})

  requestMessagesEffect$ = createEffect(() => this.actions$.pipe(
    ofType(ChatActions.requestMessages),
    map(action => {
      this.chatService.requestMessages(action.user)
    })
  ), {dispatch: false})

  constructor(private actions$: Actions, private chatService: ChatService) {}

}
