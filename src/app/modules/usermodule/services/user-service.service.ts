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
  public getdepartment(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiLink}/department`);
  }

  // Save Data To DB
  public postuserdata(userdata: Userlist):Observable<Userlist>{
    return this.http.post<Userlist>(`${this.apiLink}/userdata`, userdata)
  }

  // Display Data to List
  public displayuserdata(): Observable<Userlist[]>{
    return this.http.get<Userlist[]>(`${this.apiLink}/userdata`)
  }

  // To delete Data
  public deletedata(id: number): Observable<Userlist[]>{
    return this.http.delete<Userlist[]>(`${this.apiLink}/userdata/${id}`)
  }

  // get user id to edit
  public getbyid(id: number):Observable<Userlist>{
    return this.http.get<Userlist>(`${this.apiLink}/userdata/${id}`)
  }

  // to edit
  public editdata(id:number, userdata: Userlist):Observable<Userlist>{
    return this.http.put<Userlist>(`${this.apiLink}/userdata/${id}`, userdata)
  }
  
}
