
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponents } from './material.component';



@NgModule({
  imports: [
    CommonModule,
    ...MaterialComponents
  ],
  declarations: [],
  exports: [...MaterialComponents],
  providers: [],
})
export class SharedModule {}