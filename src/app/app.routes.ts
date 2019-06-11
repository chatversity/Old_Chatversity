import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './Onboarding/signup/signup.component';
import { LoginComponent } from './Onboarding/login/login.component';
import { ForgotComponent } from './Onboarding/forgot/forgot.component';
import { NewUserComponent } from './Onboarding/new-user/new-user.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { ErrorComponent } from './Shared/error/error.component';
import { MessagesComponent } from './messages/messages.component';
import { RoomsComponent } from './rooms/rooms.component';
import { SettingsComponent } from './settings/settings.component';
import { UpdatesComponent } from './Shared/updates/updates.component';

/*
                            For NativeScript!
 When adding to the routes the path name has to equal the name of the component!
 IE: name.component is the component but the path is 'name'
*/

 export const routes: Routes = [
  {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
  },
  {
      path: 'signup',
      component: SignupComponent,
  },
  {
      path: 'login',
      component: LoginComponent,
  },
  {
      path: 'forgot',
      component: ForgotComponent,
  },
  {
      path: 'new-user',
      component: NewUserComponent,
  },
  {
      path: 'footer',
      component: FooterComponent,
  },
  {
      path: 'navbar',
      component: NavbarComponent,
  },
  {
      path: 'error-screen',
      component: ErrorComponent,
  },
  {
      path: 'messages',
      component: MessagesComponent,
  },
  {
      path: 'rooms',
      component: RoomsComponent,
  },
  {
      path: 'settings',
      component: SettingsComponent,
  },
  {
      path: 'updates',
      component: UpdatesComponent,
  },
];
