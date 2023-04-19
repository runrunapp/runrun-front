import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import {
  AuthenticationEffects,
  AuthenticationReducer,
} from './authentication-store';
import { ListingStoreModule } from './listing-store/listing-store.module';
import { UsersEffects, UsersReducer } from './users-store';
import { ChatReducer } from './chat-store';
import { ChatEffects } from './chat-store/chat.effects';
import { AddressEffects, AddressReducer } from './address-store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      auth: AuthenticationReducer,
      users: UsersReducer,
      chats: ChatReducer,
      address: AddressReducer,
    }),
    EffectsModule.forRoot([
      AuthenticationEffects,
      UsersEffects,
      ChatEffects,
      AddressEffects,
    ]),
    ListingStoreModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
})
export class RootStoreModule {}
