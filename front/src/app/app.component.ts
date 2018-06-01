import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid">
    <div class="row "> <h1> CODAPLI </h1> </div>

    <div class="row " style="height:500px;">
      <div class="col-md-6">
        <app-joystick-container>  </app-joystick-container>
      </div>
    <div class="col-md-6">
       <app-joystick-container>  </app-joystick-container>
    </div>
    </div>
  </div>

  `
})
export class AppComponent {
  title = 'app';
}
