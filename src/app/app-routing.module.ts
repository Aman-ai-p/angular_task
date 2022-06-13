import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo : 'user', pathMatch: "full" },
  { path: "users", loadChildren: () => import('./modules/usermodule/usermodule.module').then(m => m.UsermoduleModule) },
  { path: 'resume', loadChildren: () => import('./modules/resume-builder/resume-builder.module').then(m => m.ResumeBuilderModule) },
  { path: 'user', loadChildren: () => import('./assessment-1/user/user.module').then(m => m.UserModule) },
  { path: 'staticjs', loadChildren: () => import('./staticjs/staticjs.module').then(m => m.StaticjsModule) },
  { path: 'ngtemplate', loadChildren: () => import('./ng-template/ng-template.module').then(m => m.NgTemplateModule) },
  { path: 'mvp', loadChildren: () => import('./mvpmodule/mvpmodule.module').then(m => m.MvpmoduleModule) },
  { path: 'subject', loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule) },
  { path: 'js', loadChildren: () => import('./js/js.module').then(m => m.JSModule) },
  { path: 'dragdrop', loadChildren: () => import('./dragdrop/dragdrop.module').then(m => m.DragdropModule) },
  { path: 'fileupload', loadChildren: () => import('./fileupload/fileupload.module').then(m => m.FileuploadModule) },
  { path: 'infinite-scroll', loadChildren: () => import('./infinite-scroll/infinite-scroll.module').then(m => m.InfiniteScrollModule) },
  { path: 'prescription', loadChildren: () => import('./createprescription/createprescription.module').then(m => m.CreateprescriptionModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
