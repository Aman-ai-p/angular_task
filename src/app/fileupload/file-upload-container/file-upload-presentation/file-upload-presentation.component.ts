import { ChangeDetectionStrategy } from '@angular/core';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FileData } from '../../fileupload.model';

import { FileuploadpresenterService } from '../fileuploadpresenter/fileuploadpresenter.service';


@Component({
  selector: 'app-file-upload-presentation',
  templateUrl: './file-upload-presentation.component.html',
  styleUrls: ['./file-upload-presentation.component.scss'],
  viewProviders : [FileuploadpresenterService],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class FileUploadPresentationComponent implements OnInit {

  @Output() fileUpload : EventEmitter<FileData>;

  public file : File;

  constructor(private service: FileuploadpresenterService) { 
    this.fileUpload = new EventEmitter();
  }

  ngOnInit(): void {
    this.saveFile();
  }

  public addFiles(fileToAdd : any){
    console.log(fileToAdd.files)
    this.file = fileToAdd.files[0];
  }

  public uploadFile(){
    this.service.readFile(this.file)
  }

  public saveFile(){
    this.service.fileRead$.subscribe((res: FileData) => {
      this.fileUpload.emit(res);
    })
  }
}
