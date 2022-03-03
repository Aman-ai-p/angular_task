import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaticjsComponent } from './staticjs.component';

const routes: Routes = [{ path: '', component: StaticjsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticjsRoutingModule { }
