import { Pipe, PipeTransform } from "@angular/core";
import { Userlist } from "./user.model";

@Pipe({
    name:"searchText"
})

export class SearchFilter implements PipeTransform{
    transform(userdata: Userlist[], search:string):Userlist[]{
        if(search== ''){
            return userdata;
        }
        return userdata.filter((text:Userlist) =>{
            return text.firstname.toLowerCase().match(search.toLowerCase())
        })
    }
}

