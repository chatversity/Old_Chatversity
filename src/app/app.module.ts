import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './Onboarding/signup/signup.component';
import { LoginComponent } from './Onboarding/login/login.component';
import { ForgotComponent } from './Onboarding/forgot/forgot.component';
import { NewUserComponent } from './Onboarding/new-user/new-user.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { ErrorComponent } from './Shared/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    ForgotComponent,
    NewUserComponent,
    FooterComponent,
    NavbarComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
