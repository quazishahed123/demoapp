import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getKeys'
})
export class GetKeysPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string[] {
    let keys = [];
    for(let key of value){
     for(let k in key){
       keys.push(k)
     }
    }
    return keys;
  }

}
