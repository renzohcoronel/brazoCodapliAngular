import { Component } from '@angular/core';
import { Options } from 'ng5-slider';
import { ControllerService } from './services/controller.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row m-3"> 
    <div class="col-md-12 text-center">
    <div class="text-center">
    <img [src]="'assets/images/customLogo.jpeg'" class="img-responsive" alt="Codapli image">
  </div>
    </div>
    </div>

    <div class="row h-100">
      <div class="col-md-6" style="height:240px">
        <app-joystick-element>  </app-joystick-element>
      </div>
    <div class="col-md-6  my-auto mh-100">
        <app-pincers> </app-pincers>
   </div>
    </div>
    <div class="row mt-3">
      <div class="col-12 p-3">
        <app-slider> </app-slider>
      </div>
    </div>
  </div>
  `,
})
export class AppComponent {
  title = 'app';

  

}
