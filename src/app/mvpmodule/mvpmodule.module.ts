import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MvpmoduleRoutingModule } from './mvpmodule-routing.module';
import { MvpmoduleComponent } from './mvpmodule.component';
import { EmployeeFormContainerComponent } from './employee_form_container/employee-form-container.component';
import { EmployeeListContainerComponent } from './empolyee_list_container/employee-list-container.component';
import { EmployeeFormPresentationComponent } from './employee_form_container/employee_form_presentation/employee-form-presentation.component';
import { EmployeeListPresentationComponent } from './empolyee_list_container/employee_list_presentation/employee-list-presentation.component';



@NgModule({
  declarations: [
    MvpmoduleComponent,
    EmployeeFormContainerComponent,
    EmployeeListContainerComponent,
    EmployeeFormPresentationComponent,
    EmployeeListPresentationComponent
  ],
  imports: [
    CommonModule,
    MvpmoduleRoutingModule
  ]
})
export class MvpmoduleModule { }
