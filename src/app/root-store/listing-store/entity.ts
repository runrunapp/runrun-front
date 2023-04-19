import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity'
import { Listing } from 'src/app/core/modules/search/listing.models';

export enum STATUS {
  IDLE,
  LOADING,
  FAILED,
  SUCCEDED,
}

export interface State extends EntityState<Listing> {
  activeListing: number | null;
  status: STATUS;
}

export const listingEntityAdapter: EntityAdapter<Listing> = createEntityAdapter<Listing>()
