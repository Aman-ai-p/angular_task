import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileData } from '../fileupload.model';
import { FileuploadService } from '../fileupload.service';

@Component({
  selector: 'app-list-uploaded-file-container',
  templateUrl: './list-uploaded-file-container.component.html',
  styleUrls: ['./list-uploaded-file-container.component.scss']
})
export class ListUploadedFileContainerComponent implements OnInit {

  public fileList$ : Observable<FileData[]>

  constructor(private service : FileuploadService) { 
    this.fileList$ = new Observable();
  }

  ngOnInit(): void {
    this.getFile();
  }

  // Get File List
  public getFile(){
    this.fileList$ = this.service.getFile()
  }

  // delete file
  public deleteFile(id:number){
    this.service.deleteFile(id).subscribe(res =>
      this.fileList$ = this.service.getFile() 
    );
  }



}
