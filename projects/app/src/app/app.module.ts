import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyLibModule } from 'my-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InboxPageComponent } from './inbox-page/inbox-page.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
