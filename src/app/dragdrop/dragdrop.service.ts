import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataList } from './data.model';

@Injectable()
export class DragdropService {

  private apilink : string;
  constructor(private http: HttpClient) {
      this.apilink = environment.baseURL;
  }

  // Get Data
  public getUser(): Observable<DataList[]> {
    return this.http.get<DataList[]>(`${this.apilink}/datalist`)
  }


}
