import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import {VerifyEmailComponent} from './verify-email/verify-email.component';

const routes: Routes = [
  { path:'', component:SignUpComponent},
  { path:'signup', component:SignUpComponent},
  { path:'login', component:LoginComponent},
  { path:'verify', component:VerifyEmailComponent}
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
