import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Department, Userlist } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  apiLink : string;

  constructor(private http: HttpClient) { 
    this.apiLink = environment.baseURL;
  }

  // Get department
  getdepartment(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiLink}/department`);
  }

  // Save Data To DB
  getuserdata(userdata: Userlist):Observable<Userlist>{
    return this.http.post<Userlist>(`${this.apiLink}/userdata`, userdata)
  }

  // Display Data to List
  displayuserdata(): Observable<Userlist[]>{
    return this.http.get<Userlist[]>(`${this.apiLink}/userdata`)
  }

  // To delete Data
  deletedata(id: number): Observable<Userlist[]>{
    return this.http.delete<Userlist[]>(`${this.apiLink}/userdata/${id}`)
  }

  // get user id to edit
  getbyid(id: number):Observable<Userlist>{
    return this.http.get<Userlist>(`${this.apiLink}/userdata/${id}`)
  }

  // to edit
  editdata(id:number, userdata: Userlist):Observable<Userlist>{
    return this.http.put<Userlist>(`${this.apiLink}/userdata/${id}`, userdata)
  }
  
}
