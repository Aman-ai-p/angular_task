import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { FileData } from '../fileupload.model';
import { FileuploadService } from '../fileupload.service';

@Component({
  selector: 'app-file-upload-container',
  templateUrl: './file-upload-container.component.html',
  styleUrls: ['./file-upload-container.component.scss']
})
export class FileUploadContainerComponent implements OnInit {

  public fileList$ : Observable<FileData[]>

  constructor(private service : FileuploadService, private router : Router) {
    this.fileList$ = new Observable();
  }

  ngOnInit(): void {
    this.getFile();
  }

  // Get File List
  public getFile(){
    this.fileList$ = this.service.getFile()
  }

  // save file to db
  public saveFile(file: FileData){
    this.service.addFile(file).subscribe((res) => {
      this.router.navigateByUrl('fileupload/list')
    })
  }

}
