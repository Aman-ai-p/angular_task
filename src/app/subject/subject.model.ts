
export class SubjectData{
      id: number;
      firstname : string;
      lastname : string;
      age : number;

      constructor(
            id:number,
            firstname : string,
            lastname : string,
            age : number
      ){
            this.id = id;
            this.age = age;
            this.firstname = firstname;
            this.lastname = lastname
      }
}