import { Component } from '@angular/core';
import { Options } from 'ng5-slider';

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
        <app-joystick-container>  </app-joystick-container>
      </div>
    <div class="col-md-6 mh-100">
       <div class="row pt-2 justify-content-center"> 
            <div class="col-md-6 p-2 text-center"> 
              <button class="btn btn-danger btn-circle btn-xl">Open </button>
            </div>
            <div class="col-md-6 text-center"> 
            <button class="btn btn-danger btn-circle btn-xl"> Close </button>
          </div>
       </div>
   </div>
    </div>
    <div class="row mt-3">
      <div class="col-12 p-3">
        <ng5-slider [value]="0" [options]="options"></ng5-slider>
      </div>
    </div>
  </div>
  `,
})
export class AppComponent {
  title = 'app';
  options: Options = {
    floor: 0,
    ceil: 200
  };
}
