import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { Mail } from '../mail.model';
import { Subscription } from 'rxjs';
import { InboxService } from '../inbox.service';

@Component({
  selector: 'my-lib-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss', '../styles.scss']
})
export class InboxComponent implements OnInit, OnDestroy {

  @Input() apiEndpoint: string;
  @ViewChild('listHolder') listHolder;

  readonly listPlaceholders = {
    EMPTY: 'You have no inbox email.',
    ERROR: 'Unable to load your inbox email.'
  };

  mailList: Mail[];
  errorMessage: string;
  private mailListStatus: ResponseStatus;
  private mailListSubscription: Subscription;

  constructor(
    private inboxService: InboxService
  ) { }

  get listPlaceholder(): string {
    if (this.mailListStatus === 'SUCCESSS') {
      return this.listPlaceholders.EMPTY;
    }

    if (this.mailListStatus === 'ERROR') {
      return this.listPlaceholders.ERROR;
    }

    return null;
  }

  get isLoading(): boolean {
    return this.mailListStatus === 'LOADING';
  }

  ngOnInit(): void {
    this.mailListStatus = 'LOADING';
    this.mailListSubscription = this.inboxService.fetchMailList(this.apiEndpoint).subscribe(
      (list) => {
        this.mailListStatus = 'SUCCESSS';
        this.mailList = list;
      },
      (error: Error) => {
        this.errorMessage = error.message;
        this.mailListStatus = 'ERROR';
      }
    );
  }

  ngOnDestroy(): void {
    this.mailListSubscription.unsubscribe();
  }

}

type ResponseStatus = 'SUCCESSS' | 'ERROR' | 'LOADING';
