import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '', component: UserlistComponent ,
    children:[
      {
        path:'userlist', component:UserlistComponent
      },
      {
        path:"edit/:id", component : UserlistComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
