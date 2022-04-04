import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FileData } from '../../fileupload.model';

@Injectable()
export class FileuploadpresenterService {

  public fileData : FileData;
  public fileExists : boolean = false;

  private fileRead : Subject<FileData>;
  public fileRead$ : Observable<FileData>;

  constructor() { 
    this.fileData = {} as FileData;
    this.fileRead = new Subject();
    this.fileRead$ = new Observable();
    this.fileRead$ = this.fileRead.asObservable();
  }


  // GET File name, size, type, content
  public readFile(file : File, fileList: FileData[]){

    let size = Math.round(file.size/1024/1024);
    if(size <= 2){
      this.fileData.filename = file.name;
      this.fileData.size = file.size;
      this.fileData.type = file.type;
      let fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) =>{
        this.fileData.content = event.target?.result as string;
        this.fileRead.next(this.fileData);
      }
    }
    else{
      alert("File size is larger tha 2mb");
    }
  }

}
