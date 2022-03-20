import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JsDepartment } from './js.model';

@Injectable()
export class JsService {

  apiLink : string

  constructor(private http : HttpClient) { 
    this.apiLink = environment.baseURL
  }

  getData():Observable<JsDepartment[]>{
    return this.http.get<JsDepartment[]>(`${this.apiLink}/jsDepartment`)
  }
}
