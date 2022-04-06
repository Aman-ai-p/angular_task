import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FileData } from '../../fileupload.model';


@Injectable()
export class FileuploadpresenterService {

  public fileExists : boolean;

  private fileRead : Subject<FileData>;
  public fileRead$ : Observable<FileData>;

  constructor() { 
    this.fileRead = new Subject();
    this.fileRead$ = new Observable();
    this.fileRead$ = this.fileRead.asObservable();

    this.fileExists = false;
  }

  // GET File name, size, type, content
  public readFile(file : File[], fileList: FileData[]){

    // get the file name, size, content and type
    for(let i=0; i<file.length; i++){

      let size = Math.round(file[i].size/1024/1024);      
      if(size <= 2){
        let fileReader = new FileReader();        
        fileReader.readAsDataURL(file[i]);
        fileReader.onload = (event) =>{
          let fileData = {} as FileData
          fileData.filename = file[i].name;
          fileData.size = file[i].size;
          fileData.type = file[i].type;
          console.log(event);
          fileData.content = event.target?.result as string;       
          // Check if file is empty or not 
          if(fileData.content == 'data:')
          {
            alert('File is empty');
          }
          else{
            // perform next for file to be post
            this.fileRead.next(fileData);
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


}
