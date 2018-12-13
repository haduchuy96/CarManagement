import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../../_services/index';

@Component({
  templateUrl: 'submit-car.component.html'
})

export class SubmitCarComponent {
  model: any = {};
  loading = false;
  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) {

  }


}
