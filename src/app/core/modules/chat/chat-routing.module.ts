import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileGuard } from '../authentication/components/profile.guard';
import { ChatComponent } from './chat.component';
import { ConversationComponent } from './conversation/conversation.component';

const routes: Routes = [
  {
    path: ':id',
    component: ConversationComponent,
    canActivate: [ProfileGuard],
  },
  { path: '', component: ChatComponent, canActivate: [ProfileGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
