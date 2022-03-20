import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input() public set employeeData(value : EmployeeData | null) {
    console.log(value);
    // if (value) {
    //   console.log(value)
    //   this.formTitle = 'Edit Customer';
    //   // this.customerForm.controls['age'].disable();
    //   console.log(this.customerForm)

    //   this.customerForm.patchValue(value);
    //   this._customerData = value;
    // }
  }

  public get employeeData() : EmployeeData | null {
    return this._employeeData;
  }
  
  private _employeeData!: EmployeeData;

  @Output() public add: EventEmitter<EmployeeForm>;

  public employeeForm: FormGroup;

  constructor(
    private employeeformService : EmployeeFormPresenterService
  ) {
    this.employeeForm = this.employeeformService.buildform();
    this.add = new EventEmitter();
   }

  ngOnInit(): void {
    this.employeeformService.employeeFormData$.subscribe((res: EmployeeForm) => {
      this.add.emit(res);
      // if (this.formTitle === 'Add Customer') {
      //   this.add.emit(res);
      // } else {
      //   this.edit.emit(res);
      // }
      // this.formTitle === 'Add Customer' ? this.add.emit(res) : this.edit.emit(res);;
    })
  }

  public onSubmit(){
    this.employeeformService.onSubmit(this.employeeForm)
  }

}
