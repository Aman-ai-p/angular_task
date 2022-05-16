import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfiniteScrollRoutingModule } from './infinite-scroll-routing.module';
import { InfiniteScrollComponent } from './infinite-scroll.component';
import { ScrollComponent } from './scroll/scroll.component';
import { HttpClientModule } from '@angular/common/http';
import { ScrollserviceService } from './scrollservice.service';
import { ScrollDirective } from './scroll.directive';


@NgModule({
  declarations: [
    InfiniteScrollComponent,
    ScrollComponent,
    ScrollDirective
  ],
  imports: [
    CommonModule,
    InfiniteScrollRoutingModule,
    HttpClientModule
  ],
  providers: [
    ScrollserviceService
  ]
})
export class InfiniteScrollModule { }
