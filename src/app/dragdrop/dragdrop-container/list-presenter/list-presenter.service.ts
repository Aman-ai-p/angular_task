import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { FormPresentationComponent } from '../form-presentation/form-presentation.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DataList } from '../../data.model';



@Injectable()
export class ListPresenterService {

  // Subject as Observable for form Overlay
  private openForm : Subject<any>;
  public openForm$ : Observable<any>;

  // Subject as Observable for sorting the list
  private sortedData : Subject<DataList[]>;
  public  sortedData$ : Observable<DataList[]>;

  // Check the if descending order or not 
  public isDesc : boolean;

  constructor(private overlay: Overlay) { 
    this.openForm = new Subject();
    this.openForm$ = new Observable();
    this.openForm$ = this.openForm.asObservable();

    this.sortedData = new Subject();
    this.sortedData$ = new Observable();

    this.isDesc = false;
  }

  // Opne Overlay
  public openFormOverlay(){
    this.createOverlay();
  }

  // Create a Overlay
  public createOverlay(){
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position()
      .global().top().centerHorizontally().centerVertically()
    });
    const component = new ComponentPortal(FormPresentationComponent);
    const componentRef = overlayRef.attach(component);   
    overlayRef.backdropClick().subscribe(() => overlayRef.detach());

    // Close Overlay
    componentRef.instance.closeOverlay.subscribe(()=>{
      overlayRef.detach();
    }) 
  }

  // CDK DRAG AND DROP
  public dragDrop(event : CdkDragDrop<DataList[]>){
    console.log(event.container);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  // Sorting the list
  public sortBy(property: any, list:any){
    this.isDesc = !this.isDesc;
    let direction = this.isDesc ? 1 : -1;
    list.sort((a:any,b:any) => {
      if (a[property] < b[property]) {
        return -1 * direction;
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
    this.sortedData.next(list);
  }

}
