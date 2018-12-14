import { Component, OnInit } from '@angular/core';

import { User, Car } from '../../_models/index';
import { UserService, CarService } from '../../_services/index';

@Component({
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    Cars: Car[] = [];

    constructor(private userService: UserService,
                private carService: CarService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllCarsByUserId();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllCarsByUserId() {
        this.carService.getByUserId(this.currentUser.id).subscribe(cars => {
          this.cars = cars;
          console.log(this.cars);
        });
    }
}
