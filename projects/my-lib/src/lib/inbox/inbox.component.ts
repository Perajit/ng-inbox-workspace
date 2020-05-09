import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-lib-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  @Input() apiEndpoint: string;

  constructor() { }

  ngOnInit(): void {
  }

}
