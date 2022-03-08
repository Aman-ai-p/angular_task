import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.scss']
})
export class DeletePopupComponent implements OnInit {

  @Output() DeletePopup : EventEmitter<boolean>;
  

  constructor() {
    this.DeletePopup = new EventEmitter<boolean>();
   }

  ngOnInit(): void {
  }

  public closeDeleteOverlay(){
    // this.closeDeletePopup.emit();
  }

  public DeleteDataPopup(value: boolean){
    this.DeletePopup.emit(value);
  }
}
