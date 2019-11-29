import { AuthGuardGuard } from './auth-guard.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, CanActivate } from '@angular/router';
import { AppComponent } from './app.component';
import { SinginComponent } from './auth/singin/singin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AddimagesComponent } from './addimages/addimages.component';


@NgModule({
  declarations: [
    AppComponent,
    SinginComponent,
    SignupComponent,
    PagenotfoundComponent,
    HomeComponent,
    HeaderComponent,
    AddimagesComponent,

  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot([{ path: '', component: HomeComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'signin', component: SinginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'addimages', component: AddimagesComponent, canActivate: [AuthGuardGuard] },
    { path: '**', component: PagenotfoundComponent }]), CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
