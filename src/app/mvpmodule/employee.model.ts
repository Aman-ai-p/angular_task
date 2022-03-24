export class EmployeeData {

    public id : number;
    public firstname : string;
    public lastname : string;
    public age : number;
    public department : string;
    public gender : string;
    public city : string;

    constructor(
        id : number,
        firstname : string,
        lastname : string,
        age :  number,
        department : string,
        gender : string,
        city : string
    ){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.department = department;
        this.gender = gender;
        this.city = city;
    }
}

export class EmployeeForm {
    public firstname: string;
    public lastname: string;
    public age: number;
    public department : string;
    public gender : string;
    public city : string;

    constructor(
      firstname: string,
      lastname: string,
      age: number,
      department : string,
      gender : string,
      city : string

    ) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.age = age;
      this.department = department;
      this.gender = gender;
      this.city = city;
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