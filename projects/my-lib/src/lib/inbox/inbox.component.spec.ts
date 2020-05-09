import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { InboxComponent } from './inbox.component';
import { MyLibModule } from '../my-lib.module';
import { InboxService } from '../inbox.service';
import mockMailList from 'projects/my-lib/mock/mock-mail-list';

describe('InboxComponent', () => {
  let component: InboxComponent;
  let fixture: ComponentFixture<InboxComponent>;
  let inboxService: InboxService;

  const mockInboxServiceFactory = () => ({
    fetchMailList: jasmine.createSpy().and.returnValue(of(mockMailList))
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InboxComponent],
      imports: [MyLibModule],
      providers: [
        {
          provide: InboxService,
          useFactory: mockInboxServiceFactory
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxComponent);
    component = fixture.componentInstance;
    inboxService = TestBed.inject(InboxService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title as "Inbox"', () => {
    const titleEl = fixture.debugElement.query(By.css('.inbox__title-bar h2'));
    expect(titleEl.nativeElement.textContent).toContain('Inbox');
  });

  it('should contain mail-list', () => {
    expect(component.listHolder).toBeTruthy();
  });

  it('should load mail list', () => {
    expect(component.mailList).toEqual(mockMailList);
  });
});