import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../_models/index';

@Injectable()
export class CarService {
  constructor(private http: HttpClient) { }

  getByUserId(id: number) {
    return this.http.get('/cars/' + id);
  }
  addCar(car: Car) {
    console.log(car)
    return this.http.post('/cars/register', car);
  }
}
