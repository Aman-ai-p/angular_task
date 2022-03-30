import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragdropRoutingModule } from './dragdrop-routing.module';
import { DragdropComponent } from './dragdrop.component';
import { DragdropContainerComponent } from './dragdrop-container/dragdrop-container.component';
import { FormPresentationComponent } from './dragdrop-container/form-presentation/form-presentation.component';
import { ListPresentationComponent } from './dragdrop-container/list-presentation/list-presentation.component';
import { DragdropService } from './dragdrop.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DragdropComponent,
    DragdropContainerComponent,
    FormPresentationComponent,
    ListPresentationComponent
  ],
  imports: [
    CommonModule,
    DragdropRoutingModule,
    OverlayModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    DragDropModule,
    SharedModule
  ],
  providers: [
    DragdropService
  ]
})
export class DragdropModule { }
