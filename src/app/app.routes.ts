import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

// When adding to the routes the path name has to equal the name of the component!
// IE: name.component is the component but the path is 'name'
export const routes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
  },
];
