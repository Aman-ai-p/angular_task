import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class CreateprescriptionService {

  private formData: Subject<any>;
  public formData$: Observable<any>;

  constructor(
    private fb: FormBuilder
  ) {
    this.formData = new Subject()
    this.formData$ = new Observable();
    this.formData$ = this.formData.asObservable();
  }

  buildForm() {
    return this.fb.group({
      
    })
  }


  public onSubmit(formValue:any) {
    this.formData.next(formValue.value);
  }



}
