import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dinner-list-item',
  templateUrl: './dinner-list-item.component.html',
  styleUrls: ['./dinner-list-item.component.css']
})
export class DinnerListItemComponent implements OnInit {
  @Input()
  currentDinner: any;

  constructor() {}

  ngOnInit() {}
}
