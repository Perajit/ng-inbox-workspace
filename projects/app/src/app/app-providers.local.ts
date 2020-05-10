import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockInboxInterceptor } from './mock/mock-inbox.interceptor';

export default [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: MockInboxInterceptor,
    multi: true
  }
];
