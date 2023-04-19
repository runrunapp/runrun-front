import { createAction, props } from "@ngrx/store";
import { User } from "src/app/core/modules/authentication/authentication.models";

export const fetchUser = createAction('[Users] Fetch User', props<{id: number}>())
export const fetchUserFulfilled = createAction('[Users] Fetch User Fulfilled', props<{user: User}>())
export const fetchUserFailed = createAction('[Users] Fetch User Failed', props<{error: any}>())

export const requestUser = createAction('[Users] Request User', props<{id: number}>())
export const selectUserById = createAction('[Users] Select User By Id', props<{id: number}>())
