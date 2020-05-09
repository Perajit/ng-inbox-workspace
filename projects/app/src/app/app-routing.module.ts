import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InboxPageComponent } from './inbox-page/inbox-page.component';

const routes: Routes = [
  {
    path: 'inbox',
    component: InboxPageComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inbox'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
