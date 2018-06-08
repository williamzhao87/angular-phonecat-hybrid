import { downgradeComponent } from '@angular/upgrade/static';
import { PhoneListComponent } from './phone-list.component';

// Define the `phoneList` module
angular.module('phoneList', ['core.phone']);

angular
  .module('phoneList')
  .directive('phoneList', downgradeComponent({ component: PhoneListComponent }) as angular.IDirectiveFactory);
