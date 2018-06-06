import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [HttpModule, BrowserModule, UpgradeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
