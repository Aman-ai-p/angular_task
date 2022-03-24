import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmployeeData, EmployeeDepartment, EmployeeForm,  } from './employee.model';


@Injectable()
export class MvpService {

  apiLink : string;

  constructor(private http: HttpClient) { 
    this.apiLink = environment.baseURL;
  }

  // Get department
  public getEmployeeDepartemnt(): Observable<EmployeeDepartment[]>{
    return this.http.get<EmployeeDepartment[]>(`${this.apiLink}/employeeDepartment`)
  }

  // Display Data to List
  public getEmployeeList(): Observable<EmployeeData[]>{
    return this.http.get<EmployeeData[]>(`${this.apiLink}/employee`)
  }

  // Save Employee Data To DB
  public addEmployee(form: EmployeeForm): Observable<EmployeeForm> {
    return this.http.post<EmployeeForm>(`${this.apiLink}/employee`, form)
  }

  // To delete Data
  public deleteEmployee(id: number): any {
    return this.http.delete<any>(`${this.apiLink}/employee/${id}`)
  }

  // Edit Data
  public editEmployee(form: any, id: string): any {
    return this.http.put<any>(`${this.apiLink}/employee/${id}`, form)
  }

  // Get By id
  public getEmployeeById(id: string): Observable<EmployeeData> {
    return this.http.get<EmployeeData>(`${this.apiLink}/employee/${id}`);
  }
}
