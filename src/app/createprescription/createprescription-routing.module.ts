import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateprescriptionComponent } from './createprescription.component';

const routes: Routes = [{ path: '', component: CreateprescriptionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateprescriptionRoutingModule { }
