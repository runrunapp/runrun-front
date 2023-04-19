import { Pipe, PipeTransform } from '@angular/core';
import { ChatSession } from 'src/app/root-store/chat-store/chat.models';
import { User } from '../authentication/authentication.models';

@Pipe({
  name: 'chooseUser',
})
export class ChooseUserPipe implements PipeTransform {
  transform(value: ChatSession, currentUser: User) {

    if (value.user1.id === currentUser.id) {
      return value.user2;
    }
    return value.user1;
  }
}
