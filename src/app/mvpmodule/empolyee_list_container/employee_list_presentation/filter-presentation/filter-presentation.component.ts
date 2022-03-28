import { coerceStringArray } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmployeeForm } from 'src/app/mvpmodule/employee.model';
import { FilterPresenterService } from '../filter-presenter/filter-presenter.service';


@Component({
  selector: 'app-filter-presentation',
  templateUrl: './filter-presentation.component.html',
  styleUrls: ['./filter-presentation.component.scss'],
  viewProviders:[FilterPresenterService],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class FilterPresentationComponent implements OnInit {

  @Output() closeOverlay: EventEmitter<Event>;
  @Output() filterData : EventEmitter<any>;
  

  public filterForm: FormGroup;

  constructor(private filterPresenter : FilterPresenterService) { 
    this.closeOverlay = new EventEmitter();
    this.filterData = new EventEmitter();
    this.filterForm = this.filterPresenter.buildform();
  }

  ngOnInit(): void {

    this.filterPresenter.filterFormData$.subscribe((res) =>{
      this.filterData.emit(res);
    });
  }

  // On submit
  public onSumit(){
    this.filterPresenter.onFilter(this.filterForm);
  }

  // Close Overlay
  public closeOverlayForm(){
    this.closeOverlay.emit();
  }
  
}
