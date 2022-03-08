import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgTemplateRoutingModule } from './ng-template-routing.module';
import { NgTemplateComponent } from './ng-template.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NgTemplateComponent
  ],
  imports: [
    CommonModule,
    NgTemplateRoutingModule,
    FormsModule
  ]
})
export class NgTemplateModule { }
