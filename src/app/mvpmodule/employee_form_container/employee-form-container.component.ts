import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeData, EmployeeForm } from '../employee.model';
import { MvpService } from '../mvp.service';

@Component({
  selector: 'app-employee-form-container',
  templateUrl: './employee-form-container.component.html',
  styleUrls: ['./employee-form-container.component.scss']
})
export class EmployeeFormContainerComponent implements OnInit {

  public employeeData$ : Observable<EmployeeData>
  public id!: string;

  constructor(
    private service : MvpService,
    private router : Router,
    private activatedRoute : ActivatedRoute
  ) { 
    
    this.employeeData$ = new Observable();
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id)

    if (this.id) {
      this.employeeData$ = this.service.getEmployeeById(this.id);
    }
  }

  ngOnInit(): void {
  }

  // Add employee
  public add(employeeForm: EmployeeForm) {
    this.service.addEmployee(employeeForm).subscribe((res : EmployeeForm) =>
        this.router.navigateByUrl('mvp/list')
    );
  }

  // Edit Employee
  public editEmployee(employeeForm: EmployeeForm) {
    this.service.editEmployee(employeeForm , this.id).subscribe((res: EmployeeForm) => {
        this.router.navigateByUrl('mvp/list');
      }
    );
  }

}
