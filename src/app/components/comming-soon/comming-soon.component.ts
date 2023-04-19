import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'comming-soon',
  templateUrl: './comming-soon.component.html',
  styleUrls: ['./comming-soon.component.scss'],
})
export class CommingSoonComponent implements OnInit {
  @Input() date!: string;
  @Input() time!: string;
  @Input() title!: string;
  @Input() extratext?: string;
  @Input() id!: string;
  @Input() color!: string;
  @Input() backgroundcolor!: string;
  @Input() backgroundimage!: string;
  @Input() expiredtext!: string;

  @Input() ngStyle!: { [key: string]: string };

  @ViewChild('coming') el!: ElementRef;
  @ViewChild('container') ctn!: ElementRef;

  container = {
    width: '100%',
    height: '100%',
    'background-position': 'center',
    'background-size': 'cover',
    position: 'absolute',
  };

  middle = {
    left: '50%',
    top: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    'text-align': 'center',
  };

  headline = {
    'padding-bottom': '10px',
  };

  partingLine = {
    width: '100%',
    height: '5px',
    'background-color': 'black',
    margin: 'auto',
  };

  countdown = {
    'margin-top': '20px',
  };

  simpleText = {
    left: '50%',
    bottom: '0',
    'padding-top': '20px',
    position: 'relative',
    transform: 'translateX(-50%)',
  };

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    let ctn = document.getElementById('container');

    if (!ctn) {
      return;
    }

    ctn.style.backgroundColor = this.backgroundcolor;
    ctn.style.backgroundImage = this.backgroundimage;
    ctn.style.color = this.color;

    let setCountdown: any;

    if (this.time == null || this.time == '') {
      setCountdown = new Date(this.date).getTime();
    } else if (
      (this.date != null || this.date != '') &&
      (this.time != null || this.time != '')
    ) {
      setCountdown = new Date(this.date + 'T' + this.time + 'Z').getTime();
    } else {
      console.log('Date and/or time format is wrong!');
    }

    var x = setInterval(() => {
      var now = new Date().getTime();

      var distance = setCountdown - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds = Math.floor((distance % (1000 * 60)) / 1000);

      var daysText, hoursText, minutesText, secondsText;

      if (days == 1) {
        daysText = ' día ';
      } else {
        daysText = ' días ';
      }
      if (hours == 1) {
        hoursText = ' hora ';
      } else {
        hoursText = ' horas ';
      }
      if (minutes == 1) {
        minutesText = ' minuto ';
      } else {
        minutesText = ' minutos ';
      }
      if (seconds == 1) {
        secondsText = ' sefundo ';
      } else {
        secondsText = ' segundos ';
      }

      var elementExist = this.el.nativeElement;

      if (distance < 0) {
        clearInterval(x);

        if (this.expiredtext == '' || this.expiredtext == null) {
          elementExist.innerHTML =
            '0' +
            daysText +
            '0' +
            hoursText +
            '0' +
            minutesText +
            '0' +
            secondsText;
        } else {
          elementExist.innerHTML = this.expiredtext;
        }
      } else {
        elementExist.innerHTML =
          days +
          daysText +
          hours +
          hoursText +
          minutes +
          minutesText +
          seconds +
          secondsText;
      }
    }, 1000);
  }
}
