import { Component, OnInit } from '@angular/core';
import { StaticJs } from '../../models/static.model';

import { StaticService } from '../../service/static.service';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit {

  objectlist : {};
  constructor() { 
    this.objectlist = {
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
    console.log("Object Keys: ",Object.keys(this.objectlist));
  }

  // Object.values
  public valueMethod(): void{
    console.log("Object Values: ",Object.values(this.objectlist));
  }

  // Object.entries
  public entryMethod(): void{
    console.log("Object Entries: ",Object.entries(this.objectlist));
  }

}
