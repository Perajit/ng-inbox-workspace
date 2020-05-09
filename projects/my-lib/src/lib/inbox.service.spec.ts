import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { InboxService } from './inbox.service';
import mockMailList from '../../mock/mock-mail-list';

describe('InboxService', () => {
  let service: InboxService;
  let mockHttp: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(InboxService);
    mockHttp = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#fetchMailList()', () => {
    const apiEndpoint = 'http://fake.endpoint';

    it('should fetch and return mail list from api', () => {
      let returnedValue: any;

      service.fetchMailList(apiEndpoint).subscribe((value: any) => {
        returnedValue = value;
      });

      const testReq = mockHttp.expectOne(apiEndpoint);
      testReq.flush(mockMailList);

      expect(testReq.request.method).toEqual('GET', 'call GET request');
      expect(returnedValue).toEqual(mockMailList, 'return mail list');
    })
  });
});
