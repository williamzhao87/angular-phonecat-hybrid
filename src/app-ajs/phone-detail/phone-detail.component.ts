'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.module('phoneDetail').component('phoneDetail', {
  templateUrl: './phone-detail.template.html',
  controller: [
    '$routeParams',
    'Phone',
    function PhoneDetailController($routeParams, Phone) {
      var self = this;
      Phone.get($routeParams.phoneId).subscribe(data => {
        this.phone = data;
        this.setImage(data.images[0]);
      });

      this.setImage = (imageUrl: string) => {
        this.mainImageUrl = imageUrl;
      };
    }
  ]
});
