import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateprescriptionRoutingModule } from './createprescription-routing.module';
import { CreateprescriptionComponent } from './createprescription.component';
import { CreateprescriptioncontainerComponent } from './createprescriptioncontainer/createprescriptioncontainer.component';
import { CreateprescriptionpresentationComponent } from './createprescriptioncontainer/createprescriptionpresentation/createprescriptionpresentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateprescriptionComponent,
    CreateprescriptioncontainerComponent,
    CreateprescriptionpresentationComponent
  ],
  imports: [
    CommonModule,
    CreateprescriptionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreateprescriptionModule { }
