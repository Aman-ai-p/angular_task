import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ScrollserviceService {

  apiLink : string;

  constructor(private http : HttpClient) { 
    this.apiLink = environment.baseURL;
  }

  public getEmployee():Observable<any>{
    return this.http.get<any>(`${this.apiLink}/employee`)
  }

}
