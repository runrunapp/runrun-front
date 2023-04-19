import { AddressState } from './address-store';
import { AuthenticationState } from './authentication-store';
import { ChatState } from './chat-store';
import { ListingState } from './listing-store';
import { UsersState } from './users-store';

export interface State {
  auth: AuthenticationState;

  listings: ListingState;
  users: UsersState;
  chats: ChatState;
  address: AddressState;
}
