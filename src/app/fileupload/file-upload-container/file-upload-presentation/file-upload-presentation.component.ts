import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FileuploadService } from '../../fileupload.service';


@Component({
  selector: 'app-file-upload-presentation',
  templateUrl: './file-upload-presentation.component.html',
  styleUrls: ['./file-upload-presentation.component.scss']
})
export class FileUploadPresentationComponent implements OnInit {

  public file : string;

  constructor(private service: FileuploadService) { 
  }

  ngOnInit(): void {
  }

  public addFiles(fileToAdd :any){
    this.file = fileToAdd.target.files[0];
  }

  public uploadFile(){
 
  }

}
