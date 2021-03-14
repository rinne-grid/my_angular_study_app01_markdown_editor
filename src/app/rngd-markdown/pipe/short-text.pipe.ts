import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {

  transform(value: string, size?: number): string {
    const strLen = size || 40;
    let retValue = value;
    if (value.length > strLen) {
      retValue = value.substr(0, strLen) + '...';
    }
    return retValue;
  }
}
