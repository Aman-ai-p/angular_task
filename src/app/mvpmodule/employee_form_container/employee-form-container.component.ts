import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeData, EmployeeDepartment, EmployeeForm } from '../employee.model';
import { MvpService } from '../mvp.service';

@Component({
  selector: 'app-employee-form-container',
  templateUrl: './employee-form-container.component.html',
  styleUrls: ['./employee-form-container.component.scss']
})
export class EmployeeFormContainerComponent implements OnInit {

  public employeeData$ : Observable<EmployeeData>

  constructor(
    private service : MvpService
  ) { 
    this.employeeData$ = new Observable();
  }

  ngOnInit(): void {
  }

  addEmployee(employeeForm: EmployeeForm) {
    this.service.addEmployee(employeeForm).subscribe(
      (res: any) => {
        console.log(employeeForm)
        // this.router.navigateByUrl('customers/list');
      }
    );
  }

}
