import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { InboxListComponent } from './inbox-list.component';
import mockMailListResponse from 'projects/my-lib/mock/mock-mail-list-response';

describe('InboxListComponent', () => {
  let component: InboxListComponent;
  let fixture: ComponentFixture<InboxListComponent>;

  const mockMailList = mockMailListResponse.map((mailResponse) => ({ ...mailResponse, time: new Date(mailResponse.time) }));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InboxListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxListComponent);
    component = fixture.componentInstance;
    component.mailList = mockMailList;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display mail list', () => {
    const itemEls = fixture.debugElement.queryAll(By.css('.list-item'));
    expect(itemEls.length).toEqual(component.mailList.length);
  });

  describe('item holder', () => {
    it('should display mail info', () => {
      const firstMailItem = component.mailList[0];
      const itemEl = fixture.debugElement.query(By.css('.list-item'));
      expect(itemEl.query(By.css('.list-item__name')).nativeElement.textContent).toEqual(firstMailItem.from.name);
      expect(itemEl.query(By.css('.list-item__subj')).nativeElement.textContent).toEqual(firstMailItem.subject);
      expect(itemEl.query(By.css('.list-item__body')).nativeElement.textContent).toEqual(firstMailItem.body);
    })
  });
});
