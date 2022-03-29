import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../subject/list/list.component';
import { DragdropContainerComponent } from './dragdrop-container/dragdrop-container.component';


const routes: Routes = [
  { 
    path: '', component: DragdropContainerComponent,
    children : [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: '',
        pathMatch : 'full',
        redirectTo: 'list'
      }
    ]
  }

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragdropRoutingModule { }
