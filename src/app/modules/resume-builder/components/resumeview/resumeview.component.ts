import { Component, OnInit } from '@angular/core';
import { Formdata } from '../../models/resume.model';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-resumeview',
  templateUrl: './resumeview.component.html',
  styleUrls: ['./resumeview.component.scss']
})
export class ResumeviewComponent implements OnInit {
  
  resumeData: Formdata;
  constructor(private service: ResumeService) { }

  ngOnInit(): void {
    this.getdata();
  }

  getdata(){
    this.service.getdata().subscribe((data) =>{
      console.log(data);
      this.resumeData = data;
    })
  }

}
