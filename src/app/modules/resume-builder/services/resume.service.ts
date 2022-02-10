import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Formdata } from '../models/resume.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

 
  apiLink : string;

  // resumeCreate = new Subject<FormData>();

  constructor(private http : HttpClient) {
    this.apiLink = environment.baseURL;
   }

   //  Save Data to DB
   saveData(data: Formdata):Observable<Formdata>{
     return this.http.post<Formdata>(`${this.apiLink}/resumedata`, data)
   }

  //  Get data
  getdata():Observable<Formdata>{
    return this.http.get<Formdata>(`${this.apiLink}/resumedata/1`)
  }
   
  // clear db
  cleardb(id:number):Observable<Formdata>{
    return this.http.delete<Formdata>(`${this.apiLink}/resumedata/${id}`)
  }
  }