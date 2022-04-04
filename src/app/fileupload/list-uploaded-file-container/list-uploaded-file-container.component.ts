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

  public fileRead$ : Observable<FileData[]>

  constructor(private service : FileuploadService) { 
    this.fileRead$ = new Observable();
  }

  ngOnInit(): void {
    this.getFile();
  }

  // Get File List
  public getFile(){
    this.fileRead$ = this.service.getFile()
  }



}
