import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MvpmoduleRoutingModule } from './mvpmodule-routing.module';
import { MvpmoduleComponent } from './mvpmodule.component';
import { EmployeeFormContainerComponent } from './employee_form_container/employee-form-container.component';
import { EmployeeListContainerComponent } from './empolyee_list_container/employee-list-container.component';
import { EmployeeFormPresentationComponent } from './employee_form_container/employee_form_presentation/employee-form-presentation.component';
import { EmployeeListPresentationComponent } from './empolyee_list_container/employee_list_presentation/employee-list-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MvpService } from './mvp.service';
import { FilterPresentationComponent } from './empolyee_list_container/employee_list_presentation/filter-presentation/filter-presentation.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [
    MvpmoduleComponent,
    EmployeeFormContainerComponent,
    EmployeeListContainerComponent,
    EmployeeFormPresentationComponent,
    EmployeeListPresentationComponent,
    FilterPresentationComponent
  ],
  imports: [
    CommonModule,
    MvpmoduleRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    OverlayModule,
    SharedModule

  ],
  providers: [
    MvpService
  ]

})
export class MvpmoduleModule { }
