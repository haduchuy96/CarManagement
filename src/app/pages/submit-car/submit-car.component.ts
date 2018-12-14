import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, CarService } from '../../_services/index';

@Component({
  templateUrl: 'submit-car.component.html'
})

export class SubmitCarComponent {
  model: any = {};
  loading = false;
  status = [{'id':1, 'name':'Ready'}, {'id':2, 'name': 'Not ready'}];

  constructor(
    private router: Router,
    private carService: CarService,
    private alertService: AlertService) {

  }

  submitCar() {
    console.log(this.model)
    this.loading = true;
    this.carService.addCar(this.model)
      .subscribe(
        data => {
          this.alertService.success('Submit car successful', true);
          this.router.navigate(['/']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
