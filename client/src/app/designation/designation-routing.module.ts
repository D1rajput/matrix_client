import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDesignationComponent } from './component/add-designation/add-designation.component';
import { DesignationComponent } from './component/designation/designation.component';

const routes: Routes = [
  { path: "designation" ,
  component: DesignationComponent},
{ path: "saveDesignation",
component: AddDesignationComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class DesignationRoutingModule { }
