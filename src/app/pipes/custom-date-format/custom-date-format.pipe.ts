import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDateFormat'
})
export class CustomDateFormatPipe implements PipeTransform {
  transform(value: Date): string {
    if (!value) return '';

    const day = value.getDate();
    const month = value.getMonth() + 1; // Months are zero-based, so adding 1
    const year = value.getFullYear();
    const hours = value.getHours();
    const minutes = value.getMinutes();
    const seconds = value.getSeconds();

    return `[${this.formatNumber(day)}.${this.formatNumber(month)}.${year}. ${this.formatNumber(hours)}:${this.formatNumber(minutes)}:${this.formatNumber(seconds)}]`;
  }

  private formatNumber(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
}