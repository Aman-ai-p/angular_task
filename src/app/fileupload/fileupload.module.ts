import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileuploadRoutingModule } from './fileupload-routing.module';
import { FileuploadComponent } from './fileupload.component';
import { FileUploadContainerComponent } from './file-upload-container/file-upload-container.component';
import { ListUploadedFileContainerComponent } from './list-uploaded-file-container/list-uploaded-file-container.component';
import { FileUploadPresentationComponent } from './file-upload-container/file-upload-presentation/file-upload-presentation.component';
import { ListUploadedFilePresentationComponent } from './list-uploaded-file-container/list-uploaded-file-presentation/list-uploaded-file-presentation.component';
import { FileuploadService } from './fileupload.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FileuploadComponent,
    FileUploadContainerComponent,
    ListUploadedFileContainerComponent,
    FileUploadPresentationComponent,
    ListUploadedFilePresentationComponent
  ],
  imports: [
    CommonModule,
    FileuploadRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers : [
    FileuploadService
  ]

})
export class FileuploadModule { }
