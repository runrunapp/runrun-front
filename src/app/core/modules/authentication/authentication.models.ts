import { Cite } from '../../models/cite.models';
import { BaseRunroomiePost } from '../runroomie/runroomie.models';
import { ListingReduced } from '../search/listing.models';

export interface User {
  firstName: string;
  lastName: string;
  dateJoined: Date;
  id: number;
  email: string;

  isOwner: boolean;

  profile: {
    profilePicture1: string;
    profilePicture2: string;
    profilePicture3: string;

    birthday: Date;
    gender: number;
    ocupationStudent: boolean;
    ocupationWork: boolean;
    ocupationOther: boolean;
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
    presentation: string;
  };

  cites?: Cite[];
  runroomiePosts?: BaseRunroomiePost[];
  runroomieLikedPosts?: number[];
  favoriteListings?: ListingReduced[];
  listings?: number[];
}

export interface UserReduced {
  avatar: string;
  firstName: string;
  lastName: string;
  id: number;
}
