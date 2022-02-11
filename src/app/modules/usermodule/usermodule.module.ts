import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsermoduleRoutingModule } from './usermodule-routing.module';
import { UserComponent } from './user.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { GetById } from './models/getById.pipe';
import { SearchFilter } from './models/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserServiceService } from './services/user-service.service';


@NgModule({
  declarations: [
    UserFormComponent,
    UserListComponent,
    SearchFilter,
    GetById
  ],
  imports: [
    CommonModule,
    UsermoduleRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[
    UserServiceService
  ]
})
export class UsermoduleModule { }
