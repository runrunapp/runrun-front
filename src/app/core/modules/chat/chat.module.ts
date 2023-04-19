import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { ChatSessionLabelComponent } from './chat-session-label/chat-session-label.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MessageTimePipe } from './message-time.pipe';
import { SearchFieldModule } from 'src/app/shared/runrun-components/search-field/search-field.module';
import { ChooseUserPipe } from './choose-user.pipe';
import { ConversationComponent } from './conversation/conversation.component';
import { MessageComponent } from './message/message.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AutosizeModule } from 'ngx-autosize';
import { FormsModule } from '@angular/forms';
import { IntersectionObserverModule } from '@ng-web-apis/intersection-observer';
import { AvatarModule } from 'ngx-avatars';

@NgModule({
  declarations: [
    ChatComponent,
    ChatSessionLabelComponent,
    MessageTimePipe,
    ChooseUserPipe,
    ConversationComponent,
    MessageComponent,
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FlexLayoutModule,
    SearchFieldModule,
    MatIconModule,
    MatButtonModule,
    AutosizeModule,
    FormsModule,
    IntersectionObserverModule,
    AvatarModule,
  ],
})
export class ChatModule {}
