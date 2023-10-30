import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let roundedValue = (value*100).toFixed(2);
    return `${roundedValue}%`;
  }

}
