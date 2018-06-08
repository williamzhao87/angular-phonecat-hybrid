import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { PhoneDetailComponent } from '@app-ajs/phone-detail-2/phone-detail.component';
import { PhoneListComponent } from '@app-ajs/phone-list-2/phone-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'phones', pathMatch: 'full' },
  { path: 'phones', component: PhoneListComponent },
  { path: 'phones/:phoneId', component: PhoneDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '!' }, { provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule {}
