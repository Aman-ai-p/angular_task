import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormPresenterService } from '../form-presenter/form-presenter.service';

@Component({
  selector: 'app-form-presentation',
  templateUrl: './form-presentation.component.html',
  styleUrls: ['./form-presentation.component.scss'],
  viewProviders : [FormPresenterService],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class FormPresentationComponent implements OnInit {

  @Output() closeOverlay : EventEmitter<Event>;

  constructor() { 
    this.closeOverlay = new EventEmitter();
  }

  ngOnInit(): void {
  }

  // Close Overlay
  public cancelOverlay(){
    this.closeOverlay.emit();
  }

}
