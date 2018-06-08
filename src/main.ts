import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule, setAngularJSGlobal } from '@angular/upgrade/static';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Import these globally to bring in their @types
import * as _angular_ from 'angular';
declare global {
  const angular: typeof _angular_;
}
import 'angular-resource';
import 'angular-route';
import 'angular-animate';

// And import our AngularJS module
import './app-ajs';

if (environment.production) {
  enableProdMode();
}

setAngularJSGlobal(angular);
platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  // Use the upgrade module to bootstrap the hybrid
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['phonecatApp']);
});
