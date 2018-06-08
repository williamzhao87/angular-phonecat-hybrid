import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

import { PhoneService } from '../app-ajs/core/phone-2';
import { PhoneListComponent } from '../app-ajs/phone-list-2/phone-list.component';
import { PhoneDetailComponent } from '../app-ajs/phone-detail-2/phone-detail.component';
import { CheckmarkPipe } from '../app-ajs/core/checkmark-2/checkmark.pipe';
import { AppComponent } from './app.component';
import { AppRoutingModule } from '@app/app-routing.module';

@NgModule({
  declarations: [CheckmarkPipe, PhoneListComponent, PhoneDetailComponent, AppComponent],
  imports: [HttpModule, FormsModule, BrowserModule, UpgradeModule, AppRoutingModule],
  providers: [PhoneService],
  bootstrap: [AppComponent],
  entryComponents: [PhoneListComponent]
})
export class AppModule {}
