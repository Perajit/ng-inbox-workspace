import { TestBed } from '@angular/core/testing';

import { MockInboxInterceptor } from './mock-inbox.interceptor';

describe('MockInboxInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MockInboxInterceptor
    ]
  }));

  it('should be created', () => {
    const interceptor: MockInboxInterceptor = TestBed.inject(MockInboxInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
