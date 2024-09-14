import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegisterSample1Component } from './login-register-sample1.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"", component:LoginRegisterSample1Component, children:[
    {path:"login", component:LoginComponent},
    {path:"register", component:RegisterComponent},
    {path:"**", redirectTo:"login"},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRegisterSample1RoutingModule { }
