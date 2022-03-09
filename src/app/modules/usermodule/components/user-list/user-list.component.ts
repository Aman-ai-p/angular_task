import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Department, Userlist } from '../../models/user.model';
import { UserServiceService } from '../../services/user-service.service';
import { Overlay } from '@angular/cdk/overlay';
import { FormOverlayComponent } from '../overlay-model/form-overlay.component';
import { ComponentPortal } from '@angular/cdk/portal';
import { DeletePopupComponent } from '../delete-popup/delete-popup.component';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  
  userdata: Userlist[];
  dept: Department[];
  search:string="";

  constructor(private userService: UserServiceService, private overlay: Overlay) { 
    
  }

  ngOnInit(): void {
    this.getuserdata();
    this.getdepartment();
  }
  
  // Display overlay
  public displayOverlay(id?:number) {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position()
      .global().centerHorizontally().right()
    })
    const component = new ComponentPortal(FormOverlayComponent);
    const componentRef = overlayRef.attach(component);   
    if(id){
      componentRef.instance.editId = id;
      console.log(id);
    }
    componentRef.instance.closeOverlay.subscribe(()=>{
      overlayRef.detach();
      this.getuserdata();
    })
  }

  // Delete Popup
  public delete(id:number){
   const overlayRef = this.overlay.create({
     positionStrategy : this.overlay.position()
     .global().centerHorizontally().centerVertically()
   })
   const component = new ComponentPortal(DeletePopupComponent);
   const componentRef = overlayRef.attach(component);
   componentRef.instance.DeletePopup.subscribe((value)=>{
     if(value){
      this.ondelete(id)
      overlayRef.detach();
     }
     else{
       overlayRef.detach();
     }
   })
  }

  
  // Get User Data From DB
  public getuserdata(){
    this.userService.displayuserdata().subscribe(result=>{
    this.userdata = result;
    }, (error) =>{
      alert("Something went Wrong...");
    });
  }

  // To delete
  public ondelete(id:number){
    this.userService.deletedata(id).subscribe(()=>{
      this.getuserdata();
    }, (error) =>{
      alert("Something went Wrong...");
    });
  }

  // get department
  public getdepartment(){
    this.userService.getdepartment().subscribe(result=>{
      this.dept = result;
     })
  }

  
}
