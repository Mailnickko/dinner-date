import { Component, OnInit } from '@angular/core';
import { DinnerService } from '../shared/dinner.service';

@Component({
  selector: 'app-dinner-list',
  templateUrl: './dinner-list.component.html',
  styleUrls: ['./dinner-list.component.css']
})
export class DinnerListComponent implements OnInit {
  dinners: any = [];

  constructor(private dinnerService: DinnerService) {}

  ngOnInit() {
    this.dinners = this.dinnerService.getDinners();
  }
}
