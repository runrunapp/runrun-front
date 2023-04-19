import { UserReduced } from '../modules/authentication/authentication.models';

export interface Cite {
  id: number;
  user: UserReduced;
  listing: number;
  creationDate: Date;
  approved: Boolean;
}
