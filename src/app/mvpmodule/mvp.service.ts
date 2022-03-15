import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmployeeDept, EmployeeList } from './employee.model';


@Injectable({
  providedIn: 'root'
})
export class MvpService {

  apiLink : string;

  constructor(private http: HttpClient) { 
    this.apiLink = environment.baseURL;
  }

  // Get department
  public getdepartment(): Observable<EmployeeDept[]> {
    return this.http.get<EmployeeDept[]>(`${this.apiLink}/department`);
  }

  // Save Data To DB
  public postuserdata(userdata: EmployeeList):Observable<EmployeeList>{
    return this.http.post<EmployeeList>(`${this.apiLink}/userdata`, userdata)
  }

  // Display Data to List
  public displayuserdata(): Observable<EmployeeList[]>{
    return this.http.get<EmployeeList[]>(`${this.apiLink}/userdata`)
  }

  // To delete Data
  public deletedata(id: number): Observable<EmployeeList[]>{
    return this.http.delete<EmployeeList[]>(`${this.apiLink}/userdata/${id}`)
  }

  // get user id to edit
  public getbyid(id: number):Observable<EmployeeList>{
    return this.http.get<EmployeeList>(`${this.apiLink}/userdata/${id}`)
  }

  // to edit
  public editdata(id:number, userdata: EmployeeList):Observable<EmployeeList>{
    return this.http.put<EmployeeList>(`${this.apiLink}/userdata/${id}`, userdata)
  }
}
