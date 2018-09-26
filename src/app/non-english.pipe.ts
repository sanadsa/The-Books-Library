import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nonEnglish'
})
export class NonEnglishPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace(/[\W_]/g, ' ');
  }

}
