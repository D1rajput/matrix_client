import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { DesignationRoutingModule } from './designation-routing.module';
import { DesignationComponent } from './component/designation/designation.component';
import { AddDesignationComponent } from './component/add-designation/add-designation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DesignationComponent,
    AddDesignationComponent
  ],
  imports: [
    CommonModule,
    DesignationRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,FormsModule
  ]
})
export class DesignationModule { }
