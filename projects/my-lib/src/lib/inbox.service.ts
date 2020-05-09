import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { takeLast } from 'rxjs/operators';

import { Mail } from './mail.model';

@Injectable({
  providedIn: 'root'
})
export class InboxService {

  constructor(
    private httpClient: HttpClient
  ) { }

  fetchMailList(apiEndpoint: string): Observable<Mail[]> {
    return this.httpClient.get(apiEndpoint).pipe(
      takeLast(1)
    ) as Observable<Mail[]>;
  }

}
