import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticjsRoutingModule } from './staticjs-routing.module';
import { StaticjsComponent } from './staticjs.component';
import { ArrayJSComponent } from './component/array-js.component';


@NgModule({
  declarations: [
    StaticjsComponent,
    ArrayJSComponent
  ],
  imports: [
    CommonModule,
    StaticjsRoutingModule
  ]
})
export class StaticjsModule { }
