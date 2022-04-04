import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchComponent } from './search/search.component';
import { FiledragDirective } from './dragdrop directives/filedrag.directive';
import { DatepickerComponent } from './datepicker/datepicker.component';



@NgModule({
  declarations: [
    PaginationComponent,
    SearchComponent,
    FiledragDirective,
    DatepickerComponent
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
