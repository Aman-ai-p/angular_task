import { EmailValidator } from "@angular/forms";

export interface Department{
    id:number,
    deptname:string
}

export interface Userlist{
    id:number,
    firstname:string,
    lastname:string,
    email:EmailValidator,
    phone:number,
    gender:RadioNodeList,
    date:string,
    department:number
}