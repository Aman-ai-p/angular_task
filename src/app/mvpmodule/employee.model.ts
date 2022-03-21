export class EmployeeData {

    public id : number;
    public firstname : string;
    public lastname : string;
    public age : number;
    public department : string;

    constructor(
        id : number,
        firstname : string,
        lastname : string,
        age :  number,
        department : string
    ){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.department = department;
    }
}

export class EmployeeForm {
    public firstname: string;
    public lastname: string;
    public age: number;
    constructor(
      firstname: string,
      lastname: string,
      age: number,
    ) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.age = age;
    }
  }


export class EmployeeDepartment{

    public id : number;
    public department : string;

    constructor(
        id : number,
        department : string
    ){
        this.id = id;
        this.department = department;
    }
}