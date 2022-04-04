import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FileData } from './fileupload.model';

@Injectable()
export class FileuploadService {

  public apiLink : string;

  constructor(private http : HttpClient) {
    this.apiLink = environment.baseURL;
  }

  // Upload File
  public addFile(file: FileData):Observable<FileData>{
    return this.http.post<FileData>(`${this.apiLink}/files`, file)
  }

  // Get File List
  public getFile(): Observable<FileData[]>{
    return this.http.get<FileData[]>(`${this.apiLink}/files`)
  }

}
