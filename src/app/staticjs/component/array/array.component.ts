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
  public everyMethod(): void{
    this.service.getData().subscribe(result => 
      console.log("Every Method: ",result.every(data => data.age < 18))
    )
  }

  // Filter method 
  public filterMethod(): void{
    this.service.getData().subscribe( result =>
      console.log("Filter Method: ", result.filter(data =>
        data.department === ".Net"
      ))
    )
  }

  // Find method
  public findMethod(): void{
    this.service.getData().subscribe( result =>
      console.log("Find Method: ", result.find(data =>
        data.name === "Aman"
      ))
    )
  }

  // ForEach method
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
      console.log("Some Method: ", result.some(data => data.name === "Aman"))
    )
  }

  // Join Method
  public joinMethod(): void{
    this.service.getData().subscribe((result) =>{
      console.log("Join Method: ", result.join("+"))
    }
    )
  }

  // Length Method
  public lengthMethod(): void{
    this.service.getData().subscribe( result =>
      console.log("Length Method: ", result.length) 
    )
  }

  // Map method
  public mapMethod(): void{
    this.service.getData().subscribe( result =>
     console.log("Map Method: ", result.map(data => data.city)) 
    )
  }

  // Slice method
  public sliceMethod(): void{
    this.service.getData().subscribe( result => 
     console.log("Slice Method: ", result.slice(-3))
    )
  }

  // Splice Method
  public spliceMethod(): void{
    this.service.getData().subscribe( result =>
      console.log("Splice Method: ", result.splice(2,3))
    )
  }

}
