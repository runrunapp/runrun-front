import {Message, ChatSession } from './chat.models'
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export interface ChatSessionState extends EntityState<ChatSession> {

}

export interface MessageState extends EntityState<Message> {

}

export interface State {
  chatSessions: ChatSessionState;
  messages: MessageState
}

export const chatSessionAdapter: EntityAdapter<ChatSession> = createEntityAdapter<ChatSession>()
export const messageAdapter: EntityAdapter<Message> = createEntityAdapter<Message>()
