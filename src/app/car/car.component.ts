import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {

  @Input()
  car: Car = new Car();

  @Output()
  selectedCar = new EventEmitter();

  ngOnInit(): void {
  }

  viewDetails() {
    this.selectedCar.emit(this.car);
  }
}

