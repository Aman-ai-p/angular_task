export class FileData{
      filename : string;
      size : number;
      type : string;
      content : string;
      id : number;

      constructor(filename : string, size : number, type : string, content: string, id: number){
            this.filename = filename;
            this.size = size;
            this.type = type;
            this.content = content;
            this.id = id;
      }
}