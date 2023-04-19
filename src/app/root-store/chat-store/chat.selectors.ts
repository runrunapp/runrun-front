import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ChatState } from '.';
import { AppState } from '..';
import { AuthenticationSelectors } from '../authentication-store';
import { chatSessionAdapter, messageAdapter } from './chat.entity';

const chatSessionEntitySelectors = chatSessionAdapter.getSelectors();

const messageEntitySelectors = messageAdapter.getSelectors();

export const chatFeatureSelector = (state: AppState) => state.chats;

export const sessionsSelector = (state: ChatState) => state.chatSessions;
export const messagesSelector = (state: ChatState) => state.messages;

export const selectChatSessionState = createSelector(
  chatFeatureSelector,
  sessionsSelector
);
export const selectMessageState = createSelector(
  chatFeatureSelector,
  messagesSelector
);

export const selectAllChatSessions = createSelector(
  selectChatSessionState,
  chatSessionEntitySelectors.selectAll
);
export const selectAllMessages = createSelector(
  selectMessageState,
  messageEntitySelectors.selectAll
);

export const selectCurrentUserChatSessions = createSelector(
  selectAllChatSessions,
  AuthenticationSelectors.selectUser,
  (entities, user) => {
    if (entities) {
      if (user) {
        return entities.filter((chat) => {
          return chat.user1.id === user.id || chat.user2.id === user.id;
        });
      }
    }
    return [];
  }
);

export const selectChatSession = (otherUser: number) =>
  createSelector(
    selectAllChatSessions,
    AuthenticationSelectors.selectUser,
    (entities, user) => {
      if (entities) {
        if (user) {
          return entities.find((chat) => {
            return (
              (chat.user1.id === user.id && chat.user2.id === otherUser) ||
              (chat.user1.id === otherUser && chat.user2.id === user.id)
            );
          });
        }
      }
      return undefined;
    }
  );

export const selectConversation = (user: number) =>
  createSelector(
    selectAllMessages,
    AuthenticationSelectors.selectUser,
    (entities, currentUser) => {
      if (currentUser) {
        return entities
          .filter(
            (message) =>
              (message.sender === currentUser.id &&
                message.receiver === user) ||
              (message.receiver === currentUser.id && message.sender === user)
          )
          .sort((m1, m2) => {
            const d1 = new Date(m1.createdAt);
            const d2 = new Date(m2.createdAt);
            return d1.getTime() - d2.getTime();
          });
      }
      return [];
    }
  );
