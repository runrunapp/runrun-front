import { UserReduced } from '../authentication/authentication.models';

export interface Notification {
  id: number;
  image: string;
  source: string;
  content: string;
  tag: string;
  link: string;
  creationDate: Date;
  seen: boolean;
  user: UserReduced;
}

export interface VisitRequestNotification extends Notification {
  applicant: UserReduced;
  listing: { id: number; title: string };
  approved: boolean | null;
}

export interface VisitRequestCancelByUserNotification extends Notification {
  applicant: UserReduced;
  listing: { id: number; title: string };
}

export interface VisitRequestCancelByOwnerNotification extends Notification {
  listing: { id: number; title: string };
}

export interface VisitRequestApprovedNotification extends Notification {
  owner: UserReduced;
  listing: { id: number; title: string };
}

export interface NewRunroomieShareNotification extends Notification {
  applicant: UserReduced;
  listing: { id: number; title: string };
}
export interface CancelRunroomieShareNotification extends Notification {
  applicant: UserReduced;
  listing: { id: number; title: string };
}
export interface RunroomieLikeNotification extends Notification {
  applicant: UserReduced;
  listing: { id: number; title: string };
  approved: boolean | null;
}
export interface RunroomieApproveNotification extends Notification {
  owner: UserReduced;
  listing: { id: number; title: string };
}

export interface GeneralNotification extends Notification {
  image: string;
  message: string;
  link: string;
}

export interface NewMessageNotification extends Notification {
  sender: UserReduced;
  message: number;
}
