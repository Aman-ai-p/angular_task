import { Component, OnInit } from '@angular/core';
import { FileData } from '../fileupload.model';
import { FileuploadService } from '../fileupload.service';

@Component({
  selector: 'app-file-upload-container',
  templateUrl: './file-upload-container.component.html',
  styleUrls: ['./file-upload-container.component.scss']
})
export class FileUploadContainerComponent implements OnInit {

  constructor(private service : FileuploadService) { }

  ngOnInit(): void {
  }

  public saveFile(file: FileData){
    this.service.addFile(file).subscribe((res) => {
      console.log(res)
    })
  }

}
