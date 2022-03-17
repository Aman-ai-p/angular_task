import { Component, OnInit } from '@angular/core';

import { StaticService } from '../static.service';
import { SubjectData } from '../subject.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  employee =[
    {
      "firstname": "Aman",
      "lastname" : "Patel",
      "age" : 22
    }
  ]

  data : SubjectData[];

  constructor(private service : StaticService) { 
    this.data = []
  }

  ngOnInit(): void {
    this.getData();
  }

  public getData(){
    this.service.subject$.subscribe(res => {
      this.employee.push(res)
    })
  }

}
