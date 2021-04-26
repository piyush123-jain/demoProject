import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {  SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { socketConnectionService } from './socketConnection.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    VerifyEmailComponent,
 ],
  imports: [FormsModule,
    HttpClientModule,CommonModule,
    BrowserModule,ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,HttpClientModule
  ],
  providers: [
    socketConnectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
