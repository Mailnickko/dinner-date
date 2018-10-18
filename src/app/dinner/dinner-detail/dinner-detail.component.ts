import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DinnerService } from '../shared/dinner.service';
import { Dinner } from '../shared/dinner.model';

@Component({
  selector: 'app-dinner-detail',
  templateUrl: './dinner-detail.component.html',
  styleUrls: ['./dinner-detail.component.css']
})
export class DinnerDetailComponent implements OnInit {
  currentId: string;
  dinner: Dinner;

  constructor(private route: ActivatedRoute, private dinnerService: DinnerService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getDinner(params['dinnerId']);
    });
  }

  getDinner(dinnerId: string) {
    this.dinnerService.getDinnerById(dinnerId).subscribe((dinner: Dinner) => {
      this.dinner = dinner;
    });
  }
}
