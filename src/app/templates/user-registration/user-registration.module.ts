import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegistrationRoutingModule } from './user-registration-routing.module';
import { UserRegistrationComponent } from './user-registration.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserRegistrationComponent
  ],
  imports: [
    CommonModule,
    UserRegistrationRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[UserRegistrationComponent]
})
export class UserRegistrationModule { }
