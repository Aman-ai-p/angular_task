import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import { ResumeBuilderComponent } from './resume-builder.component';
import { FormComponent } from './components/form/form.component';
import { ResumeComponent } from './components/resume/resume.component';


@NgModule({
  declarations: [
    ResumeBuilderComponent,
    FormComponent,
    ResumeComponent
  ],
  imports: [
    CommonModule,
    ResumeBuilderRoutingModule
  ]
})
export class ResumeBuilderModule { }
