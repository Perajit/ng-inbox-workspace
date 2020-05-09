import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { InboxComponent } from './inbox/inbox.component';
import { InboxListComponent } from './inbox/inbox-list/inbox-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    InboxComponent,
    InboxListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [InboxComponent]
})
export class MyLibModule { }
