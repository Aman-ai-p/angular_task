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

  public dataToEdit : SubjectData;
  public editMode : boolean;
  public activeId : number;

  constructor(private service : StaticService) { 
  }

  ngOnInit(): void {
    this.getData();
  }

  // Get Data
  public getData(){
    this.service.subject$.subscribe(res => {
      if(this.editMode)
      {
        this.employee[this.activeId] = res;
        this.editMode = false;
      }
      else{
        this.employee.push(res);
      }
    })
  }

  // Delete Data
  public deleteData(id:number){
    console.log(this.employee);
    this.employee.splice(id,1);
    console.log(this.employee);
  }

  // Edit Data
  public edit(id: number){
    this.dataToEdit = this.employee[id];
    this.service.editData$.next(this.dataToEdit)
    this.activeId = id
    this.editMode = true;
  }

}
