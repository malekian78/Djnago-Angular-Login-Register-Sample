import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  // {path:'', component:AppComponent},
    //add lazy modules to routing
    {
      path:"sample1", loadChildren: () => import('./login-register-sample1/login-register-sample1.module').then(q => q.LoginRegisterSample1Module),
    },
];
