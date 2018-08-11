import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../../services/controller.service';

@Component({
  selector: 'app-pincers',
  template: `
      <div class="row pt-2 justify-content-center"> 
        <div class="col-md-6 text-center"> 
            <button class="btn btn-success btn-circle btn-xl"
              (mousedown)="mousedownBtn1()"
              (mouseup)="mouseupBtn1()" 
              (mouseleave)="mouseupBtn1()">Open </button>
        </div>
        <div class="col-md-6 text-center"> 
          <button class="btn btn-danger btn-circle btn-xl"
            (mousedown)="mousedownBtn2()"
            (mouseup)="mouseupBtn2()" 
            (mouseleave)="mouseupBtn2()"> Close </button>
      </div>
    </div>
  `,
  styleUrls: ['./pincers.component.css']
})
export class PincersComponent implements OnInit {

  timeoutHandler1:any
  timeoutHandler2:any 
  constructor(private controllerService: ControllerService) { }

  ngOnInit() {
  }

  public mouseupBtn1() {
    if (this.timeoutHandler1) {
      clearInterval(this.timeoutHandler1);
      this.timeoutHandler1 = null;
      
    }
  }

  public mousedownBtn1() {
    this.timeoutHandler1 = setInterval(() => {
      console.log('Button1 Click');
      this.controllerService.pincers_open().subscribe();
    }, 20);
  }

  public mouseupBtn2() {
    if (this.timeoutHandler2) {
      clearInterval(this.timeoutHandler2);
      this.timeoutHandler2 = null;
      
    }
  }

  public mousedownBtn2() {
    this.timeoutHandler2 = setInterval(() => {
      console.log('Button2 Click');
      this.controllerService.pincers_close().subscribe();
    }, 20);
  }

}
