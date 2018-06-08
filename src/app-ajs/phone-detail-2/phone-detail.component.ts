import { Component } from '@angular/core';
import { PhoneService, PhoneData } from '../core/phone-2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail.component.html'
})
export class PhoneDetailComponent {
  phone: PhoneData;
  mainImageUrl: string;

  constructor(activatedRoute: ActivatedRoute, phone: PhoneService) {
    phone.get(activatedRoute.snapshot.paramMap.get('phoneId')).subscribe((p: PhoneData) => {
      this.phone = p;
      this.setImage(p.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}
