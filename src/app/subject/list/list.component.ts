import { Component, OnInit } from '@angular/core';

import { StaticService } from '../static.service';
import { SubjectData } from '../subject.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  employee : SubjectData[] =[]

  constructor(private service : StaticService) { 
  }

  ngOnInit(): void {
    this.getData();
  }

  // Get Data
  public getData(){
    this.service.subject$.subscribe(res => {
      this.employee.push(res)
      console.log(this.employee)
    })
  }


  // Delete Data
  public deleteData(data : SubjectData){
    
  }

  // Edit Data
  public edit(editData : SubjectData){
    console.log(editData)
    this.service.editData$.next(editData)
  }

}
