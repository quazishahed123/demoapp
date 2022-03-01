import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetKeysPipe } from './get-keys.pipe';



@NgModule({
  declarations: [GetKeysPipe],
  imports: [
    CommonModule,
  ],
  exports:[GetKeysPipe]
})
export class GetKeysModule { }
