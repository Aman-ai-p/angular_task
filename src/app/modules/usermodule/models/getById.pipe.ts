import { Pipe, PipeTransform } from "@angular/core";
import { Department } from "./user.model";


@Pipe({
    name: "getByid"
})
export class GetById implements PipeTransform {


    transform(id:number, dept:Department[]):string | undefined {
        return dept?.find(x=>x.id == id)?.deptname;
    }
    
}