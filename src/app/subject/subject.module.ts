import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectComponent } from './subject.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { StaticService } from './static.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SubjectComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    StaticService
  ]
})
export class SubjectModule { }
