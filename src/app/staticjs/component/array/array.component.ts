import { Component, OnInit } from '@angular/core';
import { StaticJs } from '../../models/static.model';
import { StaticService } from '../../service/static.service';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss']
})
export class ArrayComponent implements OnInit {

  constructor(private service: StaticService) { }

  ngOnInit(): void {
  }

  // Every method
  // error boolean
  public everyMethod(): void{
    this.service.getData().subscribe(result => 
      console.log("Every Method: ",result.every(data => data.age < 18))
    )
  }

  // Filter method 
  //error empty
  public filterMethod(): void{
    this.service.getData().subscribe( result =>
      console.log("Filter Method: ", result.filter(data =>
        data.department === ".Net"
      ))
    )
  }

  // Find method
  // Error undefined
  public findMethod(): void{
    this.service.getData().subscribe( result =>
      console.log("Find Method: ", result.find(data =>
        data.name === "Aman"
      ))
    )
  }

  // ForEach method
  // error undefined
  public foreachMethod(): void{
    this.service.getData().subscribe( result => 
      result.forEach(function(i){
        console.log("ForEach Method", i);
      })
    )
  }

  // Some Mehtod
  public someMethod(): void{
    this.service.getData().subscribe( result =>
      console.log("Item Found: ", result.some(data => data.name === "Aman"))
    )
  }

}
