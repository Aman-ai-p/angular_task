import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FilterPresentationComponent } from '../employee_list_presentation/filter-presentation/filter-presentation.component';

@Injectable()
export class EmployeeListPresenterService {

  // Service of delete
  private delete : Subject<number>;
  public delete$ : Observable<number>;

  private _filterData : Subject<any>;
  public filterData$ : Observable<any>

  constructor(private overlay: Overlay) { 
    // Service of delete
    this.delete = new Subject();
    this.delete$ = new Observable();
    this.delete$ = this.delete.asObservable();

    this._filterData = new Subject();
    this.filterData$ = new Observable();
    this.filterData$ = this._filterData.asObservable();
  }

  // Delete method
  public onDelete(id: number ){
    this.delete.next(id);
  }

  
  // Display overlay
  public openFilter() {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position()
      .global().centerHorizontally().right()
    });
    const component = new ComponentPortal(FilterPresentationComponent);
    const componentRef = overlayRef.attach(component);   
    overlayRef.backdropClick().subscribe(() => overlayRef.detach());

    componentRef.instance.closeOverlay.subscribe(()=>{
      overlayRef.detach();
    })
    
    componentRef.instance.filterData.subscribe((res) =>{
      this._filterData.next(res);
      overlayRef.detach();
    })
  }
  
}
