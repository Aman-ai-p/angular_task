import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class FileuploadService {

  public apiLink : string;

  constructor(private http : HttpClient) {
    this.apiLink = environment.baseURL;
  }

  // Upload File
  public addFile(file: any):Observable<any>{
    return this.http.post<any>(`${this.apiLink}/files`, file)
  }

}
