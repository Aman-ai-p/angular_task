import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateprescriptionService } from '../createprescriptionpresenter/createprescription.service';

@Component({
  selector: 'app-createprescriptionpresentation',
  templateUrl: './createprescriptionpresentation.component.html',
  styleUrls: ['./createprescriptionpresentation.component.scss'],
})
export class CreateprescriptionpresentationComponent implements OnInit {

  public validForm : FormGroup;

  constructor(
    private fb: FormBuilder
  ) { 
    this.validForm = this.formBuild();
  }
  
  ngOnInit(): void {
    this.getmode();
  }

  public formBuild(){
    return this.fb.group({
      mode: ['', Validators.required],
      email: new FormControl(''),
      phoneNumber: new FormControl('')
    })
  }

  public get getControls(){
    return this.validForm['controls'];
  }

  private getmode(){
    this.validForm.get('mode')?.valueChanges.subscribe(()=>{
      this.changeValidation();
      // console.log(this.validForm.get('mode')?.value)
    })
  }

  public submit(){
    console.log(this.validForm.value)
  }

  public changeValidation(){
    console.log(this.validForm.value)
  }

}
