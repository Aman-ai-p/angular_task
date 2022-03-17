export class EmployeeData {

    public id : number;
    public name : string;
    public age : number;
    public department : string;

    constructor(
        id : number,
        name : string,
        age :  number,
        department : string
    ){
        this.id = id;
        this.name = name;
        this.age = age;
        this.department = department;
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