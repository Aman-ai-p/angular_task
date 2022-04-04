export interface FileData{
      filename : string;
      size : number;
      type : string;
      content : string;
}

export class File{
      filename : string;
      size : number;
      type : string;
      content : string;

      constructor(filename : string, size : number, type : string, content: string){
            this.filename = filename;
            this.size = size;
            this.type = type;
            this.content = content;
      }
}