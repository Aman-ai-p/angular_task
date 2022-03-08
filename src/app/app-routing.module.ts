import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", redirectTo : 'user', pathMatch: "full"
  },
  {
    path: "users", 
    loadChildren: () => import('./modules/usermodule/usermodule.module').then(m => m.UsermoduleModule)
  },
  { 
    path: 'resume', 
    loadChildren: () => import('./modules/resume-builder/resume-builder.module').then(m => m.ResumeBuilderModule) 
  },
  { 
    path: 'user', loadChildren: () => import('./assessment-1/user/user.module').then(m => m.UserModule) 
  },
  { 
    path: 'staticjs', loadChildren: () => import('./staticjs/staticjs.module').then(m => m.StaticjsModule) 
  },
  { 
    path: 'ngtemplate', loadChildren: () => import('./ng-template/ng-template.module').then(m => m.NgTemplateModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
