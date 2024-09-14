import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegisterSample1Component } from './login-register-sample1.component';

const routes: Routes = [
  {path:'', component:LoginRegisterSample1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRegisterSample1RoutingModule { }
