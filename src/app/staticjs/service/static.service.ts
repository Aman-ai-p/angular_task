

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { StaticJs } from '../models/static.model';

@Injectable({
  providedIn: 'root'
})
export class StaticService {

  apiLink : string
  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  // Get Data
  public getData():Observable<StaticJs[]>{
    return this.http.get<StaticJs[]>(`${this.apiLink}/staticJS`)
  }

}
