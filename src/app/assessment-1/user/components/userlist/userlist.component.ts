
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Clientname, Officename, Userlist } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  userform: FormGroup;
  client: Clientname[];
  office: Officename[];
  userdata: Userlist[];
  showform: boolean;
  id:number;
  submitted = false;
  

  constructor(private fb: FormBuilder, private service: UserService, private route: ActivatedRoute ) { 
    this.userform = this.adduser();
    this.showform = false;
  }

  ngOnInit(): void {
    this.getClientName();
    this.getOfficeName();
    this.getUserData();
  }

  // form
  adduser():FormGroup{
    return this.fb.group({
     firstname: ['',Validators.required],
     lastname: ['',Validators.required],
     email: ['',[Validators.required, Validators.email]],
     clientname: ['',Validators.required],
     officename: ['',Validators.required],
     phone: ['',[Validators.required,Validators.maxLength(10)]],
     id:['',Validators.required]
    })
  }

  // validation
  get formValidate(){
    return this.userform.controls;
  }

  // to hide form
  public createNewUser(){
    this.showform = true;
  }

  // getclient name
  public getClientName(){
    this.service.getClient().subscribe(clientResult =>{
      this.client = clientResult;
    })
  }

  // get office name
  private getOfficeName(){
    this.service.getOffice().subscribe(officeResult =>{
      this.office = officeResult;
    })
  }

  // Save a new user
  public saveuser(){
    this.service.createUser(this.userform.value).subscribe(()=>{
      this.resetform();
      this.getUserData();
      this.showform = false;
    });
  }

  // Get user data
  private getUserData(){
    this.service.getUser().subscribe(userResult =>{
      console.log(this.userform.value);
      this.userdata = userResult
    })
  }

  // Delete the user
  public deleteUserdata(id:number){
    this.service.deleteUser(id).subscribe(()=>{
      this.getUserData();
    })
  }

  // edit
  public edit(id:number){
    this.showform = true;
    this.service.getbyid(id).subscribe(data => this.userform.patchValue(data));
    console.log(this.userform.value)
  }

  // reset form
  resetform(){
    this.userform.reset();
  }

}
