import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../../models/user.model';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  // department: Department[];
  // userform:FormGroup;
  // id: number;
  // isAddMode: boolean;

  constructor(private uf : FormBuilder, private userService: UserServiceService,private router: Router, private route: ActivatedRoute ) { 
    // this.userform = this.adduser();
  }

  ngOnInit(): void {
    // this.getdepartment();
    // this.id = this.route.snapshot.params['id'];
    // this.isAddMode = !this.id;
    // if (!this.isAddMode) {
    //   this.userService.getbyid(this.id).subscribe(x => this.userform.patchValue(x));
  }
  }

  // // UserForm
  // adduser():FormGroup{
  //   return this.uf.group({
  //     id:[null],
  //     firstname:['',Validators.required],
  //     lastname:['', Validators.required],
  //     email:['', [Validators.email, Validators.required]],
  //     phone:[''],
  //     gender:[''],
  //     date:[''],
  //     department:[0],
      
  //   })
  // }

  // // Get Department Option
  // public getdepartment(){
  //   this.userService.getdepartment().subscribe(result=>{
  //     this.department = result;
  //    }, (error) =>{
  //     alert("Something went Wrong...");
  //   })
  // }

  // // on submit 
  // public onSubmit(){
  //   if(this.isAddMode){
  //     this.saveUser()
  //   }else{
  //     this.updateUser();
      
  //   }
  // }


  // // To save User Details
  // public saveUser(){
  //   console.log(this.userform.value);
  //   this.userService.getuserdata(this.userform.value).subscribe(
  //     {
  //       next: ()=>{
  //         this.router.navigate(['/users/userlist'])
  //       }
  //     })

  // }

  // // update user
  // public updateUser(){
  //   this.userService.editdata(this.id, this.userform.value).subscribe(() =>{
  //     this.router.navigate(['/users/userlist']);
  //   })
  // }


  // // Reset the Form
  // public resetform(){
  //   this.userform.reset();
  // }


