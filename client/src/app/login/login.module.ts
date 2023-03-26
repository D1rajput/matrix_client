import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';
import { CreatePasswordComponent } from './login-page/createPassword/create-password/create-password.component';
import { ResetPasswordComponent } from './login-page/resetPassword/reset-password/reset-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    
  
    LoginPageComponent,
            CreatePasswordComponent,
            ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ]

})
export class LoginModule { }
