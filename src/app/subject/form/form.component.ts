import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { StaticService } from '../static.service';
import { SubjectData } from '../subject.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public formData : FormGroup;
 
  constructor(private fb: FormBuilder, private service: StaticService) {
   this.formData = this.saveData();
   }

  ngOnInit(): void {
    this.editData();
  }

  // Form Group
  public saveData(): FormGroup{
    return this.fb.group({
      firstname: [''],
      lastname : [''],
      age : ['']
    })
  }

  // Submit Data
  public submitData(){
    this.service.subject$.next(this.formData.value);
    console.log(this.formData.value)
    this.reset();
  }

  // Edit Data
  public editData(){
    this.service.editData$.subscribe(res => {
      this.formData.patchValue(res)
    })
  }

  // Reset Form
  public reset(){
    this.formData.reset()
  }
  
}
