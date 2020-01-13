import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smallerFilter'
})
export class SmallerPipe implements PipeTransform {

  transform(obj: any, number?: number): any {
    return obj.filter( obj=>{
        if ( obj.arrest_count<number ) {
          return true;
        }
      }
  )}

}
