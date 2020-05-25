import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Mail } from '../../mail.model';

@Component({
  selector: 'my-lib-inbox-list',
  templateUrl: './inbox-list.component.html',
  styleUrls: ['./inbox-list.component.scss', '../../styles.scss']
})
export class InboxListComponent implements OnInit {

  @Input() mailList: Mail[];
  @Input() placeholder: string;
  @Output() mailClick: EventEmitter<any> = new EventEmitter();
  @Output() mailSelectionChange: EventEmitter<any> = new EventEmitter();
  @Output() mailAction: EventEmitter<any> = new EventEmitter();

  private selectedItems: Set<Mail> = new Set();

  constructor() { }
  
  ngOnInit(): void {
  }

  isItemSelected(mail: Mail) {
    return this.selectedItems.has(mail);
  }

  onItemClick(mail: Mail) {
    this.mailClick.emit({ mail });
  }

  onItemCheckboxClick(event: Event, mail: Mail) {
    event.stopPropagation();

    const checkbox = event.srcElement as HTMLInputElement;
    const isSelected = checkbox.checked;

    if (isSelected) {
      this.selectedItems.add(mail);
    } else {
      this.selectedItems.delete(mail);
    }

    this.mailSelectionChange.emit({ mail, isSelected });
  }

  onItemAction(mail: Mail, action: string) {
    event.stopPropagation();

    this.mailAction.emit({ mail, action });
  }

}
