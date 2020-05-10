import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyLibModule } from 'my-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InboxPageComponent } from './inbox-page/inbox-page.component';
import appProviders from './app-providers';

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
  providers: appProviders,
  bootstrap: [AppComponent]
})
export class AppModule { }
