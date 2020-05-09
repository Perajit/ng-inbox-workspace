import { Component, OnInit, Input } from '@angular/core';
import { Mail } from '../../mail.model';

@Component({
  selector: 'my-lib-inbox-list',
  templateUrl: './inbox-list.component.html',
  styleUrls: ['./inbox-list.component.scss']
})
export class InboxListComponent implements OnInit {

  @Input() mailList: Mail[];
  @Input() placeholder: string;

  constructor() { }

  ngOnInit(): void {
  }

}
