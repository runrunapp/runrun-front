import { createAction, props } from '@ngrx/store';
import { ChatSession, Message } from './chat.models';

export const requestSessions = createAction('[Chat] Request Chat Sessions');
export const requestSessionsFullfiled = createAction(
  '[Chat] Request Chat Sessions Fullfiled',
  props<{ chatSessions: ChatSession[] }>()
);

export const requestMessages = createAction('[Chat] Request Messages', props<{user: number}>())
export const requestMessagesFullfiled = createAction('[Chat] Request Messages Fullfiled', props<{messages: Message[]}>())
export const messageRecieved = createAction('[Chat] Messages Recieved', props<{message: Message}>())

