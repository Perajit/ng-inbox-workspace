import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { InboxComponent } from './inbox/inbox.component';
import { InboxListComponent } from './inbox/inbox-list/inbox-list.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { MailFilterPipe } from './mail-filter.pipe';
import { DateDynamicPipe } from './date-dynamic.pipe';

@NgModule({
  declarations: [
    InboxComponent,
    InboxListComponent,
    LoadingIndicatorComponent,
    MailFilterPipe,
    DateDynamicPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [InboxComponent]
})
export class MyLibModule { }
