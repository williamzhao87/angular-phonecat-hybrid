import { downgradeComponent } from '@angular/upgrade/static';
import { PhoneDetailComponent } from './phone-detail.component';

// Define the `phoneDetail` module
angular.module('phoneDetail', ['ngRoute', 'core.phone']);

angular
  .module('phoneDetail')
  .directive('phone-detail', downgradeComponent({ component: PhoneDetailComponent }) as angular.IDirectiveFactory);
