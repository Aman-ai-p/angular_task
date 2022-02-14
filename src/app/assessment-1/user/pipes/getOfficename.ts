
import { Pipe, PipeTransform } from "@angular/core";
import { Officename } from "../models/user.model";


@Pipe({
    name: "getOffice"
})
export class GetOfficename implements PipeTransform {


    transform(id:number, cname:Officename[]):string | undefined {

        return cname?.find(x=>x.id == id)?.officename;
    }
    
}