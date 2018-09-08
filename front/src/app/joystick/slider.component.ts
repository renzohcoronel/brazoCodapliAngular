import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { ControllerService } from '../services/controller.service';

@Component({
  selector: 'app-slider',
  template: `
    <ng5-slider [(value)]="value" [options]="options" (valueChange)="sliderChange($event)"></ng5-slider>
    
   `,
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  value = 0
  options: Options = {
    floor: 0,
    ceil: 180
  };
  
  constructor(private controllerService: ControllerService) { }


  sliderChange($event){
    console.log("Slider ",this.value);
    this.controllerService.movementz({z:this.value}).subscribe();
  }


  ngOnInit() {
  }

}
