import { Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';

export const ROUTES: Routes = [
  // {
  //   path: '',
  //   // pathMatch: 'full',
  //   // loadChildren: () => import('./modules/main/main.module')
  //   //   .then(m => m.MainModule).catch(e => console.error(e))
  //   component: HomeComponent
  // },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }

];
