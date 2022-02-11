import { Component, OnInit } from '@angular/core';
import { Department, Userlist } from '../../models/user.model';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userdata: Userlist[];
  dept: Department[];
  search:string="";

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.getuserdata();
    this.getdepartment();
  }

  // Get User Data From DB
  getuserdata(){
    this.userService.displayuserdata().subscribe(result=>{
    this.userdata = result;
    }, (error) =>{
      alert("Something went Wrong...");
    });
  }

  // To delete
  ondelete(id:number){
    this.userService.deletedata(id).subscribe(()=>{
      this.getuserdata();
    }, (error) =>{
      alert("Something went Wrong...");
    });
  }

  // get department
  getdepartment(){
    this.userService.getdepartment().subscribe(result=>{
      this.dept = result;
     })
  }
  

}
