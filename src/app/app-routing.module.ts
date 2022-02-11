import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", redirectTo : 'users', pathMatch: "full"
  },
  {
    path: "users", 
    loadChildren: () => import('./modules/usermodule/usermodule.module').then(m => m.UsermoduleModule)
  },
  { 
    path: 'resume', 
    loadChildren: () => import('./modules/resume-builder/resume-builder.module').then(m => m.ResumeBuilderModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
