import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FileData } from '../../fileupload.model';
import { ListUploadedFilePresenterService } from '../list-uploaded-file-presenter/list-uploaded-file-presenter.service';

@Component({
  selector: 'app-list-uploaded-file-presentation',
  templateUrl: './list-uploaded-file-presentation.component.html',
  styleUrls: ['./list-uploaded-file-presentation.component.scss'],
  viewProviders : [ListUploadedFilePresenterService],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ListUploadedFilePresentationComponent implements OnInit {

  @Input() public set fileList(file : FileData[] | null){
    if(file){
      this._fileList = file;
    }
  }

  public get fileList(): FileData[]{
    return this._fileList;
  }

  private _fileList! : FileData[]

  constructor(private fileListService : ListUploadedFilePresenterService) { }

  ngOnInit(): void {
  }

  // Show file content
  public showFile(content : string, type : string){
    this.fileListService.viewFile(content, type);
  }



}
