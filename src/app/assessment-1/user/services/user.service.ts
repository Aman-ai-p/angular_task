import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clientname, Officename, Userlist } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiLink : string
  constructor(private http:HttpClient) { 
    this.apiLink = environment.baseURL;
  }

  // Save Data To DB
  public createUser(userdata: Userlist):Observable<Userlist>{
    return this.http.post<Userlist>(`${this.apiLink}/user`, userdata)
  }

  // get client name
  public getClient(): Observable<Clientname[]> {
    return this.http.get<Clientname[]>(`${this.apiLink}/clientname`);
  }

  // get office name
  public getOffice(): Observable<Officename[]> {
    return this.http.get<Officename[]>(`${this.apiLink}/officename`);
  }

  // Get user data
  public getUser(): Observable<Userlist[]> {
    return this.http.get<Userlist[]>(`${this.apiLink}/user`);
  }

  // delete the data
  public deleteUser(id: number): Observable<Userlist[]>{
    return this.http.delete<Userlist[]>(`${this.apiLink}/user/${id}`);
  }

  // get by id
  public getbyid(id: number):Observable<Userlist[]>{
    return this.http.get<Userlist[]>(`${this.apiLink}/user/${id}`);
  }
  
  // Update to db
  // public updateData(userdata: Userlist):Observable<Userlist[]>{
  //   return this.http.get<Userlist[]>(`${this.apiLink}/user/${id}`);
  // }
}
