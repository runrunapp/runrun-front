import { User } from "../authentication/authentication.models";
import { Listing } from "../search/listing.models";

export interface BaseRunroomiePost {
  id: number;
  user: number;
  listing: number;
  comment: string;
  applicants: any;
}

export interface RunroomiePost  {
  id: number;
  user: User;
  listing: Listing;
  comment: string;
  applicants: any;

}
