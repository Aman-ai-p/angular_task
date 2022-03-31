import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadContainerComponent } from './file-upload-container/file-upload-container.component';
import { FileuploadComponent } from './fileupload.component';
import { ListUploadedFileContainerComponent } from './list-uploaded-file-container/list-uploaded-file-container.component';

const routes: Routes = [
  { 
    path: '', component : FileuploadComponent ,
    children : [
      {
        path: 'list',
        component : ListUploadedFileContainerComponent
      },
      {
        path: 'uploadfile',
        component : FileUploadContainerComponent
      },
      {
        path : '',
        pathMatch : 'full',
        redirectTo : 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileuploadRoutingModule { }
