import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { User } from "src/app/core/modules/authentication/authentication.models";

export interface State extends EntityState<User> {
  error: any
  selectedUserId: number
}

export const usersEntityAdapter: EntityAdapter<User> = createEntityAdapter<User>()
