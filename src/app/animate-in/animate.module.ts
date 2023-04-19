import { NgModule, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimateInDirective } from './animate-in.directive';
import { AnimateOutDirective } from './animate-out.directive';


@NgModule({
  imports: [CommonModule],
  exports: [AnimateInDirective, AnimateOutDirective],
  declarations: [AnimateInDirective, AnimateOutDirective],
})
export class AnimateModule {}
