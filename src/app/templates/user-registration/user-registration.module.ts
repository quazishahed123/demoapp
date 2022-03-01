import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRegistrationRoutingModule } from './user-registration-routing.module';
import { UserRegistrationComponent } from './user-registration.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetKeysModule } from 'src/app/pipes/get-keys/get-keys.module';


@NgModule({
  declarations: [
    UserRegistrationComponent
  ],
  imports: [
    CommonModule,
    UserRegistrationRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    GetKeysModule
  ],
  exports:[UserRegistrationComponent]
})
export class UserRegistrationModule { }
