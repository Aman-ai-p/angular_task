import { Component, OnInit } from '@angular/core';
import { Employee, JsDepartment } from '../js.model';
import { JsService } from '../js.service';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {

  public empData : JsDepartment[];
  constructor(private service : JsService) { 
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.service.getData().subscribe(res => {
      this.empData = res;
      console.log(this.empData)
    })
  }

  public above(){
    let newData = this.empData.filter((data: JsDepartment) => {
      return data.id == 1
    })

    console.log(newData);
  }

}
