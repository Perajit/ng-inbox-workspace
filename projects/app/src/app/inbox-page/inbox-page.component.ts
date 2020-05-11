import { Component, OnInit } from '@angular/core';

import { environment } from '@environments/environment';
import { Mail } from 'my-lib';

@Component({
  selector: 'app-inbox-page',
  templateUrl: './inbox-page.component.html',
  styleUrls: ['./inbox-page.component.scss']
})
export class InboxPageComponent implements OnInit {

  inboxApiEndpoint = `${environment.baseApiUrl}/inbox`;
  message: string;

  constructor() { }

  ngOnInit(): void {
  }

  onMailClick(mail: Mail) {
    this.message = `Click mail "${mail.subject}"`;
  }

  onMailSelectionChange(mail: Mail, isSelected: boolean) {
    this.message = `${ isSelected ? 'Select' : 'Unselect' } mail "${mail.subject}"`;
  }

  onMailAction(mail: Mail, action: string) {
    this.message = `Action "${action}" on mail "${mail.subject}"`;
  }
  
}
