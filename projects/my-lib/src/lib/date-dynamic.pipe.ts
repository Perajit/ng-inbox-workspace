import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateDynamic'
})
export class DateDynamicPipe extends DatePipe implements PipeTransform {

  transform(value: Date): string {
    if (!Number(value)) {
      return null;
    }

    let format: string;
    const currentTime = new Date();

    if (value.getFullYear() !== currentTime.getFullYear()) {
      format = 'M/d/yy';
    } else if (value.getMonth() !== currentTime.getMonth() || value.getDate() !== currentTime.getDate()) {
      format = 'MMM d'
    } else {
      format = 'H:mm';
    }

    return super.transform(value, format);
  }

}
