import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { MaterialModule } from 'src/app/material/material.module';
import { LookingForComponent } from './looking-for/looking-for.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { UserRegistrationModule } from '../user-registration/user-registration.module';


@NgModule({
  declarations: [
    HomepageComponent,
    LookingForComponent,
    RecruitmentComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MaterialModule,
    UserRegistrationModule
  ]
})
export class HomepageModule { }
