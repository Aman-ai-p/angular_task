import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import { ResumeformComponent } from './components/resumeform/resumeform.component';
import { ResumeviewComponent } from './components/resumeview/resumeview.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResumeBuilderComponent } from './resume-builder.component';
import { ResumeService } from './services/resume.service';


@NgModule({
  declarations: [
    ResumeformComponent,
    ResumeviewComponent,
    ResumeBuilderComponent
  ],
  imports: [
    CommonModule,
    ResumeBuilderRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers:[
    ResumeService
  ]
})
export class ResumeBuilderModule { }
