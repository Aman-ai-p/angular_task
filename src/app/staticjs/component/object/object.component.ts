import { Component, OnInit } from '@angular/core';
import { StaticJs } from '../../models/static.model';

import { StaticService } from '../../service/static.service';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit {

  arraylist : {};
  constructor() { 
    this.arraylist = {
      id : 1,
      name : "Karan",
      city : "Udwada",
      age : 26,
      department : "Mechincal"
    }
  }

  ngOnInit(): void {
  }

  // Object.keys
  public keyMethod(): void{
    console.log(Object.keys(this.arraylist));
  }

  // Object.values
  public valueMethod(): void{
    console.log(Object.values(this.arraylist));
  }

  // Object.entries
  public entryMethod(): void{
    console.log(Object.entries(this.arraylist));
  }

}
