import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MyLibModule } from 'my-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InboxPageComponent } from './inbox-page/inbox-page.component';
import { MockInboxInterceptor } from './mock/mock-inbox.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    InboxPageComponent
  ],
  imports: [
    BrowserModule,
    MyLibModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockInboxInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
