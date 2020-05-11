import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { InboxListComponent } from './inbox-list.component';
import { MyLibModule } from '../../my-lib.module';
import mockMailListResponse from 'projects/my-lib/mock/mock-mail-list-response';
import { DebugElement } from '@angular/core';
import { Mail } from '../../mail.model';

describe('InboxListComponent', () => {
  let component: InboxListComponent;
  let fixture: ComponentFixture<InboxListComponent>;

  const mockMailList = mockMailListResponse.map((mailResponse) => ({ ...mailResponse, time: new Date(mailResponse.time) }));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InboxListComponent],
      imports: [MyLibModule],
    }).compileComponents();
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
      const firstItemEl = fixture.debugElement.query(By.css('.list-item'));
      const firstMailItem = component.mailList[0];
      expect(firstItemEl.query(By.css('.list-item__name')).nativeElement.textContent).toEqual(firstMailItem.from.name);
      expect(firstItemEl.query(By.css('.list-item__subj')).nativeElement.textContent).toEqual(firstMailItem.subject);
      expect(firstItemEl.query(By.css('.list-item__body')).nativeElement.textContent).toEqual(firstMailItem.body);
    })
  });

  describe('#mailClick', () => {
    it('should emit mailClick when clicking item', () => {
      spyOn(component, 'onItemClick');

      const firstMailItem = component.mailList[0];
      component.onItemClick(firstMailItem);

      expect(component.onItemClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('#mailSelectionChange', () => {
    let firstCheckboxNativeEl: HTMLInputElement;
    let firstMailItem: Mail;

    beforeEach(() => {
      spyOn(component.mailSelectionChange, 'emit');

      const firstItemEl = fixture.debugElement.query(By.css('.list-item'));
      firstCheckboxNativeEl = firstItemEl.query(By.css('input[type=checkbox]')).nativeElement;
      firstMailItem = component.mailList[0];
    });

    it('should emit mailSelectionChange with isSelected=true on clicking item when checkbox is checked', () => {
      firstCheckboxNativeEl.checked = true;
      component.onItemCheckboxClick({ srcElement: firstCheckboxNativeEl as any } as Event, firstMailItem);

      expect(component.mailSelectionChange.emit).toHaveBeenCalledTimes(1);
      expect(component.mailSelectionChange.emit).toHaveBeenCalledWith({ mail: firstMailItem, isSelected: true });
    });

    it('should emit mailSelectionChange with isSelected=true on clicking item when checkbox is unchecked', () => {
      firstCheckboxNativeEl.checked = false;
      component.onItemCheckboxClick({ srcElement: firstCheckboxNativeEl as any } as Event, firstMailItem);

      expect(component.mailSelectionChange.emit).toHaveBeenCalledTimes(1);
      expect(component.mailSelectionChange.emit).toHaveBeenCalledWith({ mail: firstMailItem, isSelected: false });
    });
  });

  describe('#mailAction', () => {
    const testCases = ['delete', 'mail', 'flag', 'pin'];

    testCases.forEach((action) => {
      it(`should emit mailAction with action="${action}" on clicking action button`, () => {
        spyOn(component.mailAction, 'emit');
  
        const firstMailItem = component.mailList[0];
        component.onItemAction(firstMailItem, action);
  
        expect(component.mailAction.emit).toHaveBeenCalledTimes(1);
        expect(component.mailAction.emit).toHaveBeenCalledWith({ mail: firstMailItem, action });
      });
    });
  });
});
