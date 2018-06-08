import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

export interface PhoneData {
  age: number;
  carrier?: string;
  name: string;
  snippet: string;
  images?: string[];
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  constructor(private http: Http) {}
  query(): Observable<PhoneData[]> {
    return this.http.get(`/phones/phones.json`).pipe(map((res: Response) => res.json()));
  }
  get(id: string): Observable<PhoneData> {
    return this.http.get(`/phones/${id}.json`).pipe(map((res: Response) => res.json()));
  }
}
