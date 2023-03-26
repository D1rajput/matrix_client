import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LoginPageComponent } from '../login/login-page/login-page.component';


import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { LoginModule } from '../login/login.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
   
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,NgxPaginationModule
  ],
  exports:[
    
  ]
})
export class SharedModule { }
