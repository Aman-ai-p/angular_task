import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchComponent } from './search/search.component';
import { FiledragDirective } from './dragdrop directives/filedrag.directive';



@NgModule({
  declarations: [
    PaginationComponent,
    SearchComponent,
    FiledragDirective
  ],
  imports: [
    CommonModule
  ],
  exports : [
    PaginationComponent,
    SearchComponent,
    FiledragDirective
  ]
})
export class SharedModule { }
