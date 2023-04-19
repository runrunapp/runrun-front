import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { State } from './address.models';

export interface AddressState extends EntityState<State> {}

export const stateAdapter: EntityAdapter<State> = createEntityAdapter<State>();
