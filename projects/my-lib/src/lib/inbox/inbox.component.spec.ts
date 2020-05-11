import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { InboxComponent } from './inbox.component';
import { MyLibModule } from '../my-lib.module';
import { InboxService } from '../inbox.service';
import mockMailListResponse from 'projects/my-lib/mock/mock-mail-list-response';

describe('InboxComponent', () => {
  let component: InboxComponent;
  let fixture: ComponentFixture<InboxComponent>;
  let inboxService: InboxService;

  const mockMailList = mockMailListResponse.map((mailResponse) => ({ ...mailResponse, time: new Date(mailResponse.time) }));

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
    }).compileComponents();
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

  describe('filter panel', () => {
    it('should hide filter panel initially', () => {
      const filterPanelEl = fixture.debugElement.query(By.css('.inbox__filter-panel'));
      expect(filterPanelEl).toBeFalsy();
    });

    it('should show filter panel when clicking filter toggle', () => {
      const filterToggleEl = fixture.debugElement.query(By.css('.inbox__filter-toogle'));
      filterToggleEl.triggerEventHandler('click', { });
      fixture.detectChanges();

      const filterPanelEl = fixture.debugElement.query(By.css('.inbox__filter-panel'));
      expect(filterPanelEl).toBeTruthy();
    });
  });

  describe('mail list filter', () => {
    it('should filter mail list from input term when keyup ENTER', () => {
      component.isFilterEnabled = true;
      fixture.detectChanges();

      const termInputEl = fixture.debugElement.query(By.css('.inbox__filter-panel input'));
      termInputEl.triggerEventHandler('keyup.enter', { });

      expect(component.appliedFilter).toEqual(component.inputFilter);
    });
  });
});
