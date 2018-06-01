import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-joystick-element',
  template: `
  <virtual-joystick (onChange)="onChange($event)"> jos</virtual-joystick>
  `
})
export class JoystickElementComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {



  }

  private onChange($event: any): void {
    console.log('deltaX: ' + $event.deltaX + ', deltaY: ' + $event.deltaY);
  }

}
