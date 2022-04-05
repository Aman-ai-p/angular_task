import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  // Set the uploaded files list
  @Input() public set fileList(file : FileData[] | null){
    if(file){
      this._fileList = file;
    }
  }

  public get fileList(): FileData[]{
    return this._fileList;
  }

  // An event for deleting a file
  @Output() deleteFile : EventEmitter<number>;

  private _fileList! : FileData[]

  constructor(private fileListService : ListUploadedFilePresenterService) {
    this.deleteFile = new EventEmitter();
  }

  ngOnInit(): void {
    this.fileListService.delete$.subscribe(res => this.deleteFile.emit(res))
  }

  // Show file content
  public showFile(content : string, type : string){
    this.fileListService.viewFile(content, type);
  }

  // Delete file
  public delete(id:number){
    this.fileListService.deleteFile(id);
  }

  



}
