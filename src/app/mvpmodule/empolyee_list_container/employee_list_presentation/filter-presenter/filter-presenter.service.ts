import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { EmployeeData, EmployeeForm } from 'src/app/mvpmodule/employee.model';

@Injectable({
  providedIn: 'root'
})
export class FilterPresenterService {

  private filterFormData: Subject<EmployeeForm>;
  public filterFormData$: Observable<EmployeeForm>;


  constructor(private fb: FormBuilder) {
    this.filterFormData = new Subject();
    this.filterFormData$ = new Observable();
    
    this.filterFormData$ = this.filterFormData.asObservable();
   }

  // Form Group
  buildform(){
    return this.fb.group({
      firstname: [''],
      lastname: [''],
      age: ['' ],
      department : [''],
      gender : [''],
      city : ['']
    })
  }

  public onFilter(filterFormData: FormGroup){
    this.filterFormData.next(filterFormData.value);
  }
  
}
