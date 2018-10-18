import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dinner-detail',
  templateUrl: './dinner-detail.component.html',
  styleUrls: ['./dinner-detail.component.css']
})
export class DinnerDetailComponent implements OnInit {
  currentId: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentId = params['dinnerId'];
    });
  }
}
