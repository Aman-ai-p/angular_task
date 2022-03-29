import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataList } from '../data.model';
import { DragdropService } from '../dragdrop.service';

@Component({
  selector: 'app-dragdrop-container',
  templateUrl: './dragdrop-container.component.html',
  styleUrls: ['./dragdrop-container.component.scss']
})
export class DragdropContainerComponent implements OnInit {

  public listData$ : Observable<DataList[]>;

  constructor(private service : DragdropService) {
    this.listData$ = new Observable();
  }

  ngOnInit(): void {
    this.listData$ = this.service.getUser();
  }

}
