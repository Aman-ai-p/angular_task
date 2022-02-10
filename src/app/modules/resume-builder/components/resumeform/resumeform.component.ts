import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-resumeform',
  templateUrl: './resumeform.component.html',
  styleUrls: ['./resumeform.component.scss']
})
export class ResumeformComponent implements OnInit {

  createform: FormGroup;

  constructor(private fb:FormBuilder, private service: ResumeService, private router: Router) { 
    this.createform = this.adduser();
  }

  ngOnInit(): void {
  }

  // Create new Form Group
  adduser():FormGroup{
    return this.fb.group({
        id:[],
        name: ['', Validators.required],
        post: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', [Validators.email, Validators.required ]],
        skill: this.fb.array([
          this.skillField()
        ]),
        experience: this.fb.array([
          this.experiencefield()
        ]),
        education: this.fb.array([
          this.educationfield()
        ])
    })
  }

  // Form Validation
  get f(){
    return this.createform.controls;
  }
  
  // Technical Skill start
  get techSkill(): FormArray{
    return this.createform.controls['skill'] as FormArray;
  }

  skillField():FormGroup{
    return this.fb.group({
      skill:['', Validators.required]
    })
  }

  newSkill(){
    this.techSkill.push(this.skillField());
  }

  removeSkillField(i: number){
    if(this.skillField.length != 1){
      this.techSkill.removeAt(i)
    }
  }
  // Technical Skill end

  // Experience and Post start
  get experience() : FormArray{
    return this.createform.controls['experience'] as FormArray;
  }

  experiencefield():FormGroup{
    return this.fb.group({
      exp:['', Validators.required],
      post:['', Validators.required],
      year:['', Validators.required]
    })
  }

  newExperience(){
    this.experience.push(this.experiencefield());
  }

  removeExpField(i:number){
    if(this.experiencefield.length != 1){
      this.experience.removeAt(i)
    }
  }
  // Experience and Post end

  // Education start
  get education() : FormArray{
    return this.createform.controls['education'] as FormArray
  }

  educationfield():FormGroup{
    return this.fb.group({
      education:['', Validators.required],
      major:['', Validators.required],
      gpa:['', Validators.required]
    })
  }

  newEducation(){
    this.education.push(this.educationfield());
  }

  removeEduField(i: number){
    if(this.educationfield.length != 1){
      this.education.removeAt(i)
    }
  }
  // Education end



  // Save Data to Db

  createResume(){
    console.log(this.createform.value);
    this.service.saveData(this.createform.value).subscribe()
    this.router.navigate(['resume/resumeview/'])
  }

  //clear DB
  submitToDB(){
    this.service.cleardb(1).subscribe(()=>{
      this.createResume();
    });
  }

  

  

}
