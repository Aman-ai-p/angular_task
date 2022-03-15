import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormContainerComponent } from './employee_form_container/employee-form-container.component';
import { EmployeeListContainerComponent } from './empolyee_list_container/employee-list-container.component';
import { MvpmoduleComponent } from './mvpmodule.component';

const routes: Routes = [
  { 
    path: '', component: EmployeeListContainerComponent,
    children : [
      {
        path: '',
        component: EmployeeListContainerComponent,
      },
      {
        path: 'employeeForm',
        component: EmployeeFormContainerComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MvpmoduleRoutingModule { }
