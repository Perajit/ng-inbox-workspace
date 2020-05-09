import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { InboxComponent } from './inbox/inbox.component';
import { InboxListComponent } from './inbox/inbox-list/inbox-list.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';

@NgModule({
  declarations: [
    InboxComponent,
    InboxListComponent,
    LoadingIndicatorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [InboxComponent]
})
export class MyLibModule { }
