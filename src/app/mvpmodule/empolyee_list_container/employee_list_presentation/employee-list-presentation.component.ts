import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeData } from '../../employee.model';
import { EmployeeListPresenterService } from '../employee_list_presenter/employee-list-presenter.service';

@Component({
  selector: 'app-employee-list-presentation',
  templateUrl: './employee-list-presentation.component.html',
  styleUrls: ['./employee-list-presentation.component.scss'],
  viewProviders: [EmployeeListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListPresentationComponent implements OnInit {

  @Input() public set employeeList(value : EmployeeData[] | null){
    console.log(value);
    if(value){this._employeeList = value;}
  }

  public get employeeList() : EmployeeData[] | null {
    return this._employeeList;
  }

  @Output() public delete : EventEmitter<number>

  private _employeeList! : EmployeeData[]

  constructor( private employeeListPresenter : EmployeeListPresenterService ) { 
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
    this.employeeListPresenter.delete$.subscribe((res: number) => {
      this.delete.emit(res);
    })
  }

  public OnDelete(id : number){
    this.employeeListPresenter.onDelete(id)
  }

}
