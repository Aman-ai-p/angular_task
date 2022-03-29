import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DataList } from '../../data.model';
import { ListPresenterService } from '../list-presenter/list-presenter.service';

@Component({
  selector: 'app-list-presentation',
  templateUrl: './list-presentation.component.html',
  styleUrls: ['./list-presentation.component.scss'],
  viewProviders: [ListPresenterService],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ListPresentationComponent implements OnInit {

  // set Data
  @Input() public set listData(value : DataList[] | null){
    console.log(value)
    if(value){
      this._listData = value;
    }
  }
  
  // get Data
  public get listData() : DataList[]  {
    return this._listData
  }

  private _listData! : DataList[];
  public addList: DataList[];

  constructor(private listPresenter: ListPresenterService) { 
    this.addList = [];
  }

  ngOnInit(): void {
    this.sortedList();
  }

  // Open Form
  public openForm(){
    this.listPresenter.openFormOverlay();
  }

  // drag and drop
  public drop(event : CdkDragDrop<DataList[]>){
    this.listPresenter.dragDrop(event)
  }

  // CALL For SORTING 
  public sortGroup(property:string){
    this.listPresenter.sortBy(property, this.listData)
  }

  // GET SORTED LIST
  public sortedList(){
    this.listPresenter.sortedData$.subscribe((res: DataList[]) => {
      this._listData = res;
    })
  }

}
