import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ControllerService } from '../services/controller.service';

@Component({
  selector: 'app-joystick-element',
  template: `
  <virtual-joystick  
  (mousedown)="mousedown()"
  (mouseup)="mouseup()" 
  (mouseleave)="mouseup()"
  (onChange)="onChange($event)"> jos</virtual-joystick>
  `
})
export class JoystickElementComponent implements OnInit {

  timeoutHandler:any;
  values:any;

  constructor(private serviceController:ControllerService) {
  }

  ngOnInit() {
  }

  public mouseup() {
    if (this.timeoutHandler) {
      clearInterval(this.timeoutHandler);
      this.timeoutHandler = null;
      this.values = null;
    }
  }

  public mousedown() {
    this.timeoutHandler = setInterval(() => {
      console.log('deltaX: ' + this.values.deltaX + ', deltaY: ' + this.values.deltaY);

      this.values.deltaX&&this.values.deltaY?this.serviceController
      .movementxy({x: this.values.deltaX , y: this.values.deltaY }).subscribe():"";
    }, 20);
  }


  public onChange($event: any): void {
    this.values = $event;
    //console.log('deltaX: ' + $event.deltaX + ', deltaY: ' + $event.deltaY);
  }

}
