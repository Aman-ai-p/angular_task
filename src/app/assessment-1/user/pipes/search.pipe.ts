import { Pipe, PipeTransform } from "@angular/core";
import { Clientname } from "../models/user.model";

@Pipe({
    name:"searchText"
})

export class SearchFilter implements PipeTransform{
    transform(value: string, client: Clientname[]) {
        
    }
       
}

