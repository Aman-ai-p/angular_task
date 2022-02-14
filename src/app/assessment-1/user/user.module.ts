import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { GetClientname } from './pipes/getClientname.pipe';
import { GetOfficename } from './pipes/getOfficename';
// import { SearchFilter } from './pipes/search.pipe';


@NgModule({
  declarations: [
    UserComponent,
    UserlistComponent,
    GetClientname,
    GetOfficename,
    // SearchFilter
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    UserService
  ]
})
export class UserModule { }
