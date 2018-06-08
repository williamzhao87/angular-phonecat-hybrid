import { Component } from '@angular/core';

import { PhoneService, PhoneData } from '../core/phone-2';

@Component({
  selector: 'phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent {
  phones: PhoneData[];
  query: string;
  orderProp: string;

  constructor(phoneService: PhoneService) {
    phoneService.query().subscribe(phones => {
      this.phones = phones;
    });
    this.orderProp = 'age';
  }

  getPhones(): PhoneData[] {
    return this.sortPhones(this.filterPhones(this.phones));
  }

  private filterPhones(phones: PhoneData[]) {
    if (phones && this.query) {
      return phones.filter(phone => {
        const name = phone.name.toLowerCase();
        const snippet = phone.snippet.toLowerCase();
        return name.indexOf(this.query) >= 0 || snippet.indexOf(this.query) >= 0;
      });
    }
    return phones;
  }

  private sortPhones(phones: PhoneData[]) {
    if (phones && this.orderProp) {
      return phones
        .slice(0) // Make a copy
        .sort((a, b) => {
          if (a[this.orderProp] < b[this.orderProp]) return -1;
          else if ([b[this.orderProp] < a[this.orderProp]]) return 1;
          else return 0;
        });
    }
    return phones;
  }
}
