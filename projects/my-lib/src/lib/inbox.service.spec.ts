import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { InboxService } from './inbox.service';
import { Mail } from './mail.model';
import mockMailListResponse from '../../mock/mock-mail-list-response';

describe('InboxService', () => {
  let service: InboxService;
  let mockHttp: HttpTestingController;

  const mockMailList = mockMailListResponse.map((mailResponse) => ({ ...mailResponse, time: new Date(mailResponse.time) }));

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
      let returnedValue: Mail[];

      service.fetchMailList(apiEndpoint).subscribe((value: Mail[]) => {
        returnedValue = value;
      });

      const testReq = mockHttp.expectOne(apiEndpoint);
      testReq.flush(mockMailListResponse);

      expect(testReq.request.method).toEqual('GET', 'call GET request');
      expect(returnedValue).toEqual(mockMailList, 'return mail list');
    })
  });
});
