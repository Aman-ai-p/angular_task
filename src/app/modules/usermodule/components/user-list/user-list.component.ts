import { Component, OnInit } from '@angular/core';
import { Department, Userlist } from '../../models/user.model';
import { UserServiceService } from '../../services/user-service.service';
import { Overlay } from '@angular/cdk/overlay';
import { FormOverlayComponent } from '../overlay-model/form-overlay.component';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userdata: Userlist[];
  dept: Department[];
  search:string="";

  constructor(private userService: UserServiceService, private overlay: Overlay) { }

  ngOnInit(): void {
    this.getuserdata();
    this.getdepartment();
  }

  // create overlay
  private overlayRef = this.overlay.create({
    positionStrategy: this.overlay
    .position().global().centerHorizontally().right()
  });
  
  // Display overlay
  public displayOverlay() {
    const component = new ComponentPortal(FormOverlayComponent);
    const componentRef = this.overlayRef.attach(component);   
    
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
