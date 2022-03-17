import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmployeeData, EmployeeDepartment,  } from './employee.model';


@Injectable()
export class MvpService {

  apiLink : string;

  constructor(private http: HttpClient) { 
    this.apiLink = environment.baseURL;
  }

  // // Get Employee department
  // public getDepartment(): Observable<EmployeeDepartment[]> {
  //   return this.http.get<EmployeeDepartment[]>(`${this.apiLink}/employeeDepartment`);
  // }

  // // Save Employee Data To DB
  // public saveEmployeeData(employeeData: EmployeeData):Observable<EmployeeData>{
  //   return this.http.post<EmployeeData>(`${this.apiLink}/employee`, employeeData)
  // }

  // Display Data to List
  public getEmployeeList(): Observable<EmployeeData[]>{
    return this.http.get<EmployeeData[]>(`${this.apiLink}/employee`)
  }

  // // To delete Data
  // public deletedata(id: number): Observable<EmployeeList[]>{
  //   return this.http.delete<EmployeeList[]>(`${this.apiLink}/userdata/${id}`)
  // }

  // // get user id to edit
  // public getbyid(id: number):Observable<EmployeeList>{
  //   return this.http.get<EmployeeList>(`${this.apiLink}/userdata/${id}`)
  // }

  // // to edit
  // public editdata(id:number, userdata: EmployeeList):Observable<EmployeeList>{
  //   return this.http.put<EmployeeList>(`${this.apiLink}/userdata/${id}`, userdata)
  // }
}
