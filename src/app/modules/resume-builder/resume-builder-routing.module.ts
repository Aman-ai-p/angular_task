import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeformComponent } from './components/resumeform/resumeform.component';
import { ResumeviewComponent } from './components/resumeview/resumeview.component';

const routes: Routes = [
  { 
    path: '',
    children:[
      {
        path:'', redirectTo:'resumeview', pathMatch: "full"
      },
      {
        path:'resumeview', component:ResumeviewComponent
      },
      {
        path:'resumeform', component:ResumeformComponent
      }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeBuilderRoutingModule { }
