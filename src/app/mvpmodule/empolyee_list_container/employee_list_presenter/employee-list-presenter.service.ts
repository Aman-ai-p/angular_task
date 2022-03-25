import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LowerCasePipe } from '@angular/common';
import { Injectable, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EmployeeData } from '../../employee.model';
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
  public openFilter(listData:EmployeeData[]) {

    // create overlay
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position()
      .global().centerHorizontally().right()
    });
    const component = new ComponentPortal(FilterPresentationComponent);
    const componentRef = overlayRef.attach(component);   
    overlayRef.backdropClick().subscribe(() => overlayRef.detach());

    // Close Overlay
    componentRef.instance.closeOverlay.subscribe(()=>{
      overlayRef.detach();
    })
    
    // On submit Overlay form
    componentRef.instance.filterData.subscribe((res) =>{

      // Filtering Data
      let _filterFormData = [...listData];
      let data = _filterFormData.map(item => { return Object.keys(item)});
      console.log(data)
      let datakey = data[0];
      datakey.forEach((item) => {
        if(res[item]){
          _filterFormData = _filterFormData.filter((data: any)=>{
            return data[item].toString().toLowerCase() == res[item].toString().toLowerCase()
          })
        }
      })
      listData = _filterFormData
      this._filterData.next(listData);
      overlayRef.detach();
    })
  }
  
}
