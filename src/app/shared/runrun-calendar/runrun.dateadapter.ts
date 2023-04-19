import { MomentDateAdapter } from '@angular/material-moment-adapter';

export default class RunrunDateAdapter extends MomentDateAdapter {
  getDayOfWeekNames(style: 'long' | 'short' | 'narrow') {
    return ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
  }
}
