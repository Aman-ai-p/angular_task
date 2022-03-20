import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JSComponent } from './js.component';

const routes: Routes = [{ path: '', component: JSComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JSRoutingModule { }
