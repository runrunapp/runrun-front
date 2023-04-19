import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Icons } from 'src/app/core/services/icons/icon.service';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent implements OnInit {
  constructor() {}
  @Input()
  set outlined(value: boolean) {
    this.isOutlined = value;
  }
  get outlined(): boolean {
    return this.isOutlined;
  }
  isOutlined = false;

  @Input() text!: string;
  @Output() clickEmitter = new EventEmitter();
  icons = Icons;

  ngOnInit(): void {}

  click(): void {
    this.clickEmitter.emit();
  }
}
