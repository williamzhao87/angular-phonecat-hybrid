import { downgradeInjectable } from '@angular/upgrade/static';

import { PhoneService } from './phone.service';

// Define the `core.phone` module
angular.module('core.phone', []);

angular.module('core.phone').factory('phone-service', downgradeInjectable(PhoneService));
