import { Component, OnInit } from '@angular/core';
import { DinnerService } from '../shared/dinner.service';
import { Dinner } from '../shared/dinner.model';

@Component({
  selector: 'app-dinner-list',
  templateUrl: './dinner-list.component.html',
  styleUrls: ['./dinner-list.component.css']
})
export class DinnerListComponent implements OnInit {
  dinners: Dinner[] = [];

  constructor(private dinnerService: DinnerService) {}

  ngOnInit() {
    const dinnerObservable = this.dinnerService.getDinners();
    dinnerObservable.subscribe(
      (dinners: Dinner[]) => {
        this.dinners = dinners;
      },
      err => {},
      () => {}
    );
  }
}
