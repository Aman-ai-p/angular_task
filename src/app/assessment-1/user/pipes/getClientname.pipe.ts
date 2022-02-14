import { Pipe, PipeTransform } from "@angular/core";
import { Clientname } from "../models/user.model";


@Pipe({
    name: "getClient"
})
export class GetClientname implements PipeTransform {


    transform(id:number, cname:Clientname[]):string | undefined {

        return cname?.find(x=>x.id == id)?.clientname;
    }
    
}