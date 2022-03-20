export class JsDepartment{
    id : number;
    department : string
    employee : Employee[];
    constructor(
        id: number,
        department : string,
        employee : Employee[],
    ){
        this.id = id;
        this.department = department
        this.employee = employee;
    }
}

export class Employee{
    id : number;
    name : string;
    age : number;
    gender : string;
    hobby : Hobby[];
    constructor(
        id : number,
        name : string,
        age : number,
        gender : string,
        hobby : Hobby[]
    ){
        this.id = id;
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    }
}

export class Hobby{
    id : number;
    hobby_1 : string;
    hobby_2 : string;
    hobby_3 : string;
    constructor( 
        id : number,
        hobby_1 : string,
        hobby_2 : string,
        hobby_3 : string
    ){
        this.id = id;
        this.hobby_1 = hobby_1;
        this.hobby_2 = hobby_2;
        this.hobby_3 = hobby_3; 
    }
}