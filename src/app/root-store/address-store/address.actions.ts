import { createAction, props } from '@ngrx/store';
import { State } from './address.models';

export const requestStates = createAction('[Address] Request States');
export const requestStatesFullfiled = createAction(
  '[Address] Request States Fullfiled',
  props<{ states: State[] }>()
);
