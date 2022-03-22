import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { EmployeeData, EmployeeForm } from '../../employee.model';
import { EmployeeFormPresenterService } from '../employee_form_presenter/employee-form-presenter.service';

@Component({
  selector: 'app-employee-form-presentation',
  templateUrl: './employee-form-presentation.component.html',
  styleUrls: ['./employee-form-presentation.component.scss'],
  viewProviders : [EmployeeFormPresenterService],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class EmployeeFormPresentationComponent implements OnInit {

  // Set employeeData
  @Input() public set employeeData(value : EmployeeData | null) {
    console.log(value);
    if (value) {
      console.log(value)
      this.formTitle = "Edit"
      this.employeeform.patchValue(value);
      this._employeeData = value;
    }
  }

  public get employeeData() : EmployeeData | null {
    return this._employeeData;
  }
  
  private _employeeData!: EmployeeData;

  @Output() public add: EventEmitter<EmployeeForm>;
  @Output() public edit: EventEmitter<EmployeeForm>;

  public employeeform: FormGroup;
  public formTitle: string;

  constructor(
    private employeeformService : EmployeeFormPresenterService,
    private location: Location
  ) {
    this.employeeform = this.employeeformService.buildform();
    this.add = new EventEmitter();
    this.edit = new EventEmitter();
    this.formTitle = "ADD";
   }

  ngOnInit(): void {
    this.employeeformService.employeeFormData$.subscribe((res: EmployeeForm) => {
      this.formTitle === 'Edit' ? this.edit.emit(res) : this.add.emit(res);;
    })
  }

  // On Submit Form
  public onSubmit(){
    this.employeeformService.submitData(this.employeeform)
  }

  // On cancel
  onCancel(){
    this.location.back();
  }

}
