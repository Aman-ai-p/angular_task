import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FileData } from '../../fileupload.model';


@Injectable()
export class FileuploadpresenterService {

  public fileData : FileData;
  public fileExists : boolean;

  private fileRead : Subject<FileData>;
  public fileRead$ : Observable<FileData>;

  constructor() { 
    this.fileData = {} as FileData;
    this.fileRead = new Subject();
    this.fileRead$ = new Observable();
    this.fileRead$ = this.fileRead.asObservable();

    this.fileExists = false;
  }

  // GET File name, size, type, content
  public readFile(file : File, fileList: FileData[]){

    // Check if file already exists
    for(let i=0; i<fileList.length; i++){
      if(fileList[i].filename == file.name){
        this.fileExists = true;
        break;
      }
    }

    // get the file name, size, content and type
    let size = Math.round(file.size/1024/1024);
    if(size <= 2 && this.fileExists == false){
      this.fileData.filename = file.name;
      this.fileData.size = file.size;
      this.fileData.type = file.type;
      let fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) =>{
        this.fileData.content = event.target?.result as string;
        // Check if file is empty or not 
        if(this.fileData.content == 'data:')
        {
          alert('File is empty');
        }
        else{
          // perform next for file to be post
          this.fileRead.next(this.fileData);
        }
      }
    }
    // when file size is greater than mentioned size or already exists.
    else{
      alert("File size is larger than 2 MB or file may be already exists");
      this.fileExists = false;
    }

  }

}
