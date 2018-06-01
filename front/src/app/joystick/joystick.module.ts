import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoystickContainerComponent } from './joystick-container/joystick-container.component';
import { JoystickElementComponent } from './joystick-container/joystick-element/joystick-element.component';
import { NgxVirtualJoystickModule } from 'ngx-virtual-joystick';

@NgModule({
  imports: [
    CommonModule,
    NgxVirtualJoystickModule.forRoot()
  ],
  declarations: [JoystickContainerComponent, JoystickElementComponent],
  exports: [JoystickContainerComponent, JoystickElementComponent]
})
export class JoystickModule { }
