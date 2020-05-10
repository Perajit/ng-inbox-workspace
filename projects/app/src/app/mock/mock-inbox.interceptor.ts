import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { MailResponse } from 'my-lib';
import mockMailListResponse from './mock-mail-list-response';
import { environment } from '@environments/environment';

@Injectable()
export class MockInboxInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const reqUrl = request.url;
    const isFetchMailListReq = reqUrl === `${environment.baseApiUrl}/inbox`;

    if (isFetchMailListReq) {
      return this.interceptFetchMailListReq();
    }

    return next.handle(request);
  }

  private interceptFetchMailListReq(): Observable<HttpEvent<MailResponse[]>> {
    return of(new HttpResponse({ status: 200, body: mockMailListResponse })).pipe(
      delay(1000)
    );
  }

}
