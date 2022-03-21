import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SubjectData } from './subject.model';

@Injectable()
export class StaticService {

  public subject$ : Subject<SubjectData>
  public editData$ : Subject<SubjectData>

  constructor() {
    this.subject$ = new Subject<SubjectData>();
    this.editData$ = new Subject<SubjectData>();
  }


}
