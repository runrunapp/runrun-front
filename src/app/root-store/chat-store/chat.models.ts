import { UserReduced } from "src/app/core/modules/authentication/authentication.models";

export interface Message {
    id: number;
    sender: number;
    receiver: number;
    text: string;
    read: boolean;
    createdAt: Date;
    updatedAt: Date;
    readAt: Date;
}

export interface ChatSession {
  user1: UserReduced;
  user2: UserReduced;
  active: boolean;
  lastMessage: Message;
}
