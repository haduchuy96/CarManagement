import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CarService {
  constructor(private http: HttpClient) { }
  getByUserId(id: number) {
    return this.http.get('/car/' + id);
  }
  addCar(user: User) {
    return this.http.post('/car/register', user);
  }
}
