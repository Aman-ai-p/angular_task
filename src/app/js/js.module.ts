import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JSRoutingModule } from './js-routing.module';
import { JSComponent } from './js.component';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { JsService } from './js.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    JSComponent,
    HeroCardComponent
  ],
  imports: [
    CommonModule,
    JSRoutingModule,
    HttpClientModule
  ],
  providers:[
    JsService
  ]
})
export class JSModule { }
