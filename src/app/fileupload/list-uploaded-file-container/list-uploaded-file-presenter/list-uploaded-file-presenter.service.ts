import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';


@Injectable()
export class ListUploadedFilePresenterService {

  private delete : Subject<number>;
  public delete$ : Observable<number>;

  constructor() {
    this.delete = new Subject();
    this.delete$ = new Observable();
    this.delete$ = this.delete.asObservable();
  }

  // Show file content
  public viewFile(content: string, type: string) {

    // to get the encoded base64 string
    let base64 = content.split(',')[1];
    // decodes a string of base64 to character
    const char = atob(base64);
    // length of the char-data
    let charLength = char.length;
    // create a memory buffer for the data
    const mBuffer = new Uint8Array(charLength);
    console.log(mBuffer);
    while(charLength--){
      // charCodeAt() returns the Unicode value of the character at the specified location
      mBuffer[charLength] = char.charCodeAt(charLength); 
    } 
    const blob = new Blob([mBuffer], {type : type})
    const url = URL.createObjectURL(blob);
    window.open(url)
  }

  // Delete file
  public deleteFile(id:number){
    this.delete.next(id);
  }

}
