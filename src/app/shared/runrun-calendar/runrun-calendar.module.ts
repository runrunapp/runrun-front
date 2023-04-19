import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunrunCalendarComponent } from './runrun-calendar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MomentDateModule, MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { RunrunCalendarHeaderComponent } from './runrun-calendar-header/runrun-calendar-header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import RunrunDateAdapter from './runrun.dateadapter';

@NgModule({
  declarations: [RunrunCalendarComponent, RunrunCalendarHeaderComponent],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MomentDateModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  providers: [
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: ['l', 'LL'],
        },
        display: {
          dateInput: '',
          monthYearLabel: 'MMMM YYYY',
          dateA11yLabel: '',
          monthYearA11yLabel: 'MMMM YYYY',
        },
      },
    },
    {
      provide: DateAdapter,
      useClass: RunrunDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    // { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
  exports: [RunrunCalendarComponent],
})
export class RunrunCalendarModule {}
