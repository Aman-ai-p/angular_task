import { Component, Input, OnInit } from '@angular/core';
import { FileData } from '../../fileupload.model';

@Component({
  selector: 'app-list-uploaded-file-presentation',
  templateUrl: './list-uploaded-file-presentation.component.html',
  styleUrls: ['./list-uploaded-file-presentation.component.scss']
})
export class ListUploadedFilePresentationComponent implements OnInit {

  @Input() public fileList(file : FileData[] | null){
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
