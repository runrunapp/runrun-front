import { createReducer, on } from '@ngrx/store';
import { ChatActions } from '.';
import { chatSessionAdapter, messageAdapter, State } from './chat.entity';
import { ChatSession } from './chat.models';

const initialState: State = {
  chatSessions: chatSessionAdapter.getInitialState({}),
  messages: messageAdapter.getInitialState({}),
};

export const reducer = createReducer(
  initialState,
  on(ChatActions.requestSessionsFullfiled, (state, action) => {
    const chatSessions = chatSessionAdapter.addMany(
      action.chatSessions,
      state.chatSessions
    );
    return { ...state, chatSessions };
  }),
  on(ChatActions.requestMessagesFullfiled, (state, action) => {
    const messages = messageAdapter.addMany(action.messages, state.messages);

    return { ...state, messages };
  }),
  on(ChatActions.messageRecieved, (state, action) => {
    const messages = messageAdapter.addOne(action.message, state.messages);
    let chatSession: ChatSession | null = null;
    for (const key in state.chatSessions.entities) {
      const chat = state.chatSessions.entities[key];
      if (
        (chat?.user1.id === action.message.sender &&
          chat.user2.id === action.message.receiver) ||
        (chat?.user1.id === action.message.receiver &&
          chat.user2.id === action.message.sender)
      ) {
        chatSession = chat;
        break;
      }
    }
    if (chatSession) {
      chatSession = { ...chatSession, lastMessage: action.message };
      const chatSessions = chatSessionAdapter.upsertOne(
        chatSession,
        state.chatSessions
      );
      return { ...state, messages, chatSessions };
    }
    return { ...state, messages };
  })
);
