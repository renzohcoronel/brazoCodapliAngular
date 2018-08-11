import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxVirtualJoystickModule } from 'ngx-virtual-joystick';
import { JoystickElementComponent } from './joystick-element.component';
import { SliderComponent } from './slider.component';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  imports: [
    CommonModule,
    NgxVirtualJoystickModule.forRoot(),
    Ng5SliderModule
  ],
  declarations: [ JoystickElementComponent, SliderComponent],
  exports: [JoystickElementComponent, SliderComponent]
})
export class JoystickModule { }
