import { createReducer, on } from '@ngrx/store';
import { UsersActions } from '.';
import { State, usersEntityAdapter } from './users.entity';

export const initialState: State = usersEntityAdapter.getInitialState({
  error: null,
  selectedUserId: -1,
});

export const reducer = createReducer(
  initialState,
  on(UsersActions.fetchUserFulfilled, (state, action) =>
    usersEntityAdapter.setOne(action.user, { ...state, error: null })
  ),
  on(UsersActions.fetchUserFailed, (state, action) => ({
    ...state,
    error: action.error,
  })),
  on(UsersActions.selectUserById, (state, action) => ({
    ...state,
    selectedUserId: action.id,
  }))
);
