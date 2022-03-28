import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../../models/user.model';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-form-overlay',
  templateUrl: './form-overlay.component.html',
  styleUrls: ['./form-overlay.component.scss']
})
export class FormOverlayComponent implements OnInit {

  @Output() closeOverlay : EventEmitter<Event>;
  @Input() editId : number;
  department: Department[];
  userform:FormGroup;
  id: number;
  editMode: boolean;

  constructor(private uf : FormBuilder, private userService: UserServiceService,private router: Router, private route: ActivatedRoute ) { 
    this.userform = this.adduser();
    this.closeOverlay = new EventEmitter<Event>();
    this.editId = 0;
    this.editMode = false;
  }

  ngOnInit(): void {
    this.getdepartment();
    // this.id = this.route.snapshot.params['id'];
    if(this.editId != 0){
      this.editMode = true;
    }
    if (this.editMode) {
      this.userService.getbyid(this.editId).subscribe(x => this.userform.patchValue(x));
    }
  }

  // UserForm
  public adduser():FormGroup{
    return this.uf.group({
      id:[null],
      firstname:['',Validators.required],
      lastname:['', Validators.required],
      email:['', [Validators.email, Validators.required]],
      phone:[''],
      gender:[''],
      date:[''],
      department:[0],
      
    })
  }

  // Get Department Option
  public getdepartment(){
    this.userService.getdepartment().subscribe(result=>{
      this.department = result;
     }, (error) =>{
      alert("Something went Wrong...");
    })
  }

  // on submit 
  public onSubmit(){
    if(this.editMode){
      this.updateUser();
    }
    else{
      this.saveUser();
    }
  }

  // To save User Details
  public saveUser(){
    console.log(this.userform.value);
    this.userService.postuserdata(this.userform.value).subscribe()
    this.closeOverlayForm();
  }

  // update user
  public updateUser(){
    this.userService.editdata(this.editId, this.userform.value).subscribe(() =>{
      this.router.navigate(['/users/userlist']);
      this.closeOverlayForm();
    }) 
  }


  // Reset the Form
  public resetform(){
    this.userform.reset();
  }

  // Cancel overlay
  public closeOverlayForm(){
    this.closeOverlay.emit();
  }

}
