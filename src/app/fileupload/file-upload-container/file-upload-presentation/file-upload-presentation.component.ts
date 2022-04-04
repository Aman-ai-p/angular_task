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

  @Input() public set fileList(file : FileData[] | null){
    if(file){
      this._fileList = file;
    }
  }

  public get fileList(): FileData[]{
    return this._fileList;
  }

  private _fileList! : FileData[]

  @Output() fileUpload : EventEmitter<FileData>;

  public file : File;

  constructor(private service: FileuploadpresenterService) { 
    this.fileUpload = new EventEmitter();
  }

  ngOnInit(): void {
    this.saveFile();
  }

  // GET SELECTED FILES
  public addFiles(fileToAdd : any){
    this.file = fileToAdd.files[0];
    console.log(this.file); 
  }

  // GET NAME, TYPE, SIZE, Content of file
  public uploadFile(){
    this.service.readFile(this.file, this._fileList)
  }

  // Save files
  public saveFile(){
    this.service.fileRead$.subscribe((res: FileData) => {
      this.fileUpload.emit(res);
    })
  }
}
