import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminAuthGuardService } from './services/authService/superAdminAuthGuardService';
import { MemberAuthGuardService } from './services/authService/memberAuthGuardService'
import { P404Component } from './error/404.component';
import { P500Component } from './error/500.component';
import { LoginPageComponent } from './login/login-page/login-page.component';

const routes: Routes = [{
  path:"",
  component:LoginPageComponent,
},
// {
//   path: '**',
//   component: P404Component,
//   data: {
//     title: 'Page 404'
//   }
// },
{
  path: '500',
  component: P500Component,
  data: {
    title: 'Page 500'
  }
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled' ,useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
