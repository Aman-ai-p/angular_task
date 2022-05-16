import { Component, OnInit } from '@angular/core';
import { EmployeeData } from 'src/app/mvpmodule/employee.model';
import { ScrollserviceService } from '../scrollservice.service';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit {
  
  public employee : EmployeeData[];
  dataList : number;

  constructor(private service: ScrollserviceService) { }

  ngOnInit(): void {
    this.getemployee();
  }

  getemployee(){
    this.service.getEmployee().subscribe((res) => {
      console.log(res)
      this.employee = res;
      console.log(this.employee)
    })
  }

  loadData(dataList = 10){
    let i=0;
    while(i < dataList) {
      
    }
  }

}
