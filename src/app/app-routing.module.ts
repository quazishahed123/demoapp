import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/homepage'
  },
  { 
    path: 'homepage', 
    loadChildren: () => import('./templates/homepage/homepage.module').then(m => m.HomepageModule) 
  }, 
  { 
    path: 'user-registration', 
    loadChildren: () => import('./templates/user-registration/user-registration.module').then(m => m.UserRegistrationModule) 
  }, 
  { 
    path: 'user-profile', 
    loadChildren: () => import('./templates/user-profile/user-profile.module').then(m => m.UserProfileModule) 
  },
  {
    path:"**",
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
