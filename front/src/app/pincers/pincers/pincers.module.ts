import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PincersComponent } from './pincers.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PincersComponent],
  exports:[PincersComponent]
})
export class PincersModule { }
