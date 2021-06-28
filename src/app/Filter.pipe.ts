import {Pipe, PipeTransform} from '@angular/core'
@Pipe({name:'FilterPipe'})
export class FilterPipe implements PipeTransform
{
    transform(collection:any[],element:any):any[]
    {
        if(!collection)
        {
            return [];
        }
        if(!element)
        {
            return [];
        }
        element=(<string>element).toLocaleLowerCase()
        return collection.filter(j=>{
            return (<string>j).toLocaleLowerCase().includes(element)
        })
    }
}