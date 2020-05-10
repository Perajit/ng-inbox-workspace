import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { takeLast, map } from 'rxjs/operators';

import { Mail, MailResponse } from './mail.model';

@Injectable({
  providedIn: 'root'
})
export class InboxService {

  constructor(
    private httpClient: HttpClient
  ) { }

  fetchMailList(apiEndpoint: string): Observable<Mail[]> {
    return this.httpClient.get(apiEndpoint).pipe(
      takeLast(1),
      map((listResponse: MailResponse[]) => {
        return listResponse.map((mailResponse: MailResponse) => ({
          ...mailResponse,
          time: new Date(mailResponse.time)
        }))
      })
    ) as Observable<Mail[]>;
  }

}
