import { createSelector } from '@ngrx/store';
import { UsersState } from '.';
import { AppState } from '..';
import { usersEntityAdapter } from './users.entity';

const { selectIds, selectEntities, selectAll, selectTotal } =
  usersEntityAdapter.getSelectors();

export const usersFeatureSelector = (state: AppState) => state.users;
const getSelectedUserId = (state: UsersState) => state.selectedUserId;

export const selectSelectedUserId = createSelector(
  usersFeatureSelector,
  getSelectedUserId
);
export const selectUsersEntities = createSelector(
  usersFeatureSelector,
  selectEntities
);

export const selectSelectedUser = createSelector(
  selectUsersEntities,
  selectSelectedUserId,
  (users, id) => users[id]
);
export const selectUserById = (id: number) =>
  createSelector(selectUsersEntities, (users) => {
    return users[id];
  });
