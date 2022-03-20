import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class EmployeeListPresenterService {

  // Service of delete
  private delete : Subject<number>
  public delete$ : Observable<number>

  constructor() { 
    // Service of delete
    this.delete = new Subject();
    this.delete$ = new Observable();
    this.delete$ = this.delete.asObservable();
  }

  // Delete method
  public onDelete(id: number ){
    this.delete.next(id);
  }
  
}
