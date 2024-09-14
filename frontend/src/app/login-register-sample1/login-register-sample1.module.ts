import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRegisterSample1RoutingModule } from './login-register-sample1-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatIconModule } from '@angular/material/icon';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatInputModule } from '@angular/material/input';

import { LoginRegisterSample1Component } from './login-register-sample1.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginRegisterSample1Component,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    //! Material imports
    // MatIconModule,
    // MatProgressSpinnerModule,
    // MatFormFieldModule,
    // MatButtonModule,
    // MatCheckboxModule,
    // MatInputModule,

    FormsModule, ReactiveFormsModule,

    CommonModule,
    LoginRegisterSample1RoutingModule,
  ]
})
export class LoginRegisterSample1Module { }
