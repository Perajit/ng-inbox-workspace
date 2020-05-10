import { Pipe, PipeTransform } from '@angular/core';

import { Mail } from './mail.model';

@Pipe({
  name: 'mailFilter'
})
export class MailFilterPipe implements PipeTransform {

  transform(value: Mail[] = [], term: string): Mail[] {
    if (!term || !value) {
      return value;
    }

    return value.filter((item) => {
      const fields = [
        item.from.name,
        item.from.email,
        item.subject,
        item.body
      ];
      return fields.some((value) => value.toLowerCase().includes(term.toLowerCase()));
    });
  }

}
