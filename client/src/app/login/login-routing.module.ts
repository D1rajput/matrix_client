import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePasswordComponent } from './login-page/createPassword/create-password/create-password.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ResetPasswordComponent } from './login-page/resetPassword/reset-password/reset-password.component';



const routes: Routes = [
{
  path:"login",
  component:LoginPageComponent
},
{
  path:"resetPassword",
  component:ResetPasswordComponent
},
{
  path:"createPassword",
  component:CreatePasswordComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
