import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JoystickModule } from './joystick/joystick.module';
import { Ng5SliderModule } from 'ng5-slider';
import { ControllerService } from './services/controller.service';
import { PincersModule } from './pincers/pincers/pincers.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    JoystickModule,
    Ng5SliderModule,
    PincersModule,
    HttpClientModule
  ],
  providers: [
    ControllerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
