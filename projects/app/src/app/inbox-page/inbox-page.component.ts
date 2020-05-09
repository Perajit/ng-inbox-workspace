import { Component, OnInit } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-inbox-page',
  templateUrl: './inbox-page.component.html',
  styleUrls: ['./inbox-page.component.scss']
})
export class InboxPageComponent implements OnInit {

  inboxApiEndpoint = `${environment.baseApiUrl}/inbox`;

  constructor() { }

  ngOnInit(): void {
  }

}
