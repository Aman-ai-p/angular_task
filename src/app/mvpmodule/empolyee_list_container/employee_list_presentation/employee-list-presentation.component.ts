import { Component, Input, OnInit } from '@angular/core';
import { EmployeeData } from '../../employee.model';

@Component({
  selector: 'app-employee-list-presentation',
  templateUrl: './employee-list-presentation.component.html',
  styleUrls: ['./employee-list-presentation.component.scss']
})
export class EmployeeListPresentationComponent implements OnInit {

  @Input() public set employeeList(value : EmployeeData[] | null){
    console.log(value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
