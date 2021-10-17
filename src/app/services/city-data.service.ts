import { Injectable } from '@angular/core';
import {City} from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CityDataService {

  citys: [];
  city: City

  constructor() { }

  setCities(data) {
    this.city = data;
  }
  getCities() {
    return this.city;
  }

  setCity(data) {
    this.city = data;
  }
  getCity() {
    return this.city;
  }


}
