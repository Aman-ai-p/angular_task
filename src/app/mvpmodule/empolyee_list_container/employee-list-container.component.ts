import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeData } from '../employee.model';
import { MvpService } from '../mvp.service';

@Component({
  selector: 'app-employee-list-container',
  templateUrl: './employee-list-container.component.html',
  styleUrls: ['./employee-list-container.component.scss']
})
export class EmployeeListContainerComponent implements OnInit {

  public employeeList$ : Observable<EmployeeData[]>

  constructor(
    private employeeDepartmentService : MvpService
  ) 
  { 
    this.employeeList$ = new Observable();
  }

  ngOnInit(): void {
    this.employeeList$ = this.employeeDepartmentService.getEmployeeList();
  }

}
