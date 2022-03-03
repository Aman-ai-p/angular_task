import { Component, OnInit } from '@angular/core';
import { find } from 'rxjs';

@Component({
  selector: 'app-array-js',
  templateUrl: './array-js.component.html',
  styleUrls: ['./array-js.component.scss']
})
export class ArrayJSComponent implements OnInit {

  arr:number[];
 
  constructor() {
    this.arr = [1,2,3,4,5];
   }

  ngOnInit(): void {

    console.log(this.arr);
    

    // Every operator
    console.log(this.arr.every((value) => value == 5));
  }
  
  

}
