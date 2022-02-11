import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'', redirectTo:'userlist', pathMatch:'full'
      },
      {
        path: 'userlist', component : UserListComponent
      },
      {
        path: 'userform', component : UserFormComponent
      },
      {
        path:"edit/:id", component : UserFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermoduleRoutingModule { }
