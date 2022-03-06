import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticjsRoutingModule } from './staticjs-routing.module';
import { StaticjsComponent } from './staticjs.component';
import { ArrayComponent } from './component/array/array.component';
import { ObjectComponent } from './component/object/object.component';
import { StaticService } from './service/static.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    StaticjsComponent,
    ArrayComponent,
    ObjectComponent,

  ],
  imports: [
    CommonModule,
    StaticjsRoutingModule,
    HttpClientModule
  ],
  providers:[
    StaticService
  ]
})
export class StaticjsModule { }
