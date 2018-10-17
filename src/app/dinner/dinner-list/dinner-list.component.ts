import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinner-list',
  templateUrl: './dinner-list.component.html',
  styleUrls: ['./dinner-list.component.css']
})
export class DinnerListComponent implements OnInit {
  dinners: any = [
    {
      id: 1,
      title: 'Cajun Extravaganza',
      city: 'Los Angeles',
      street: 'Flower Street',
      category: 'Cajun',
      image: 'http://via.placeholder.com/350x250',
      diners: 6,
      description: 'Good food from down south',
      rate: 40,
      status: 'Open',
      createdAt: '12/24/2018'
    },
    {
      id: 2,
      title: 'Baja Time',
      city: 'New York',
      street: 'Times Square',
      category: 'Mexican',
      image: 'http://via.placeholder.com/350x250',
      diners: 8,
      description: 'Below border treats',
      rate: 20,
      status: 'Full',
      createdAt: '12/24/2018'
    },
    {
      id: 3,
      title: 'Oodles of Noodles',
      city: 'San Francisco',
      street: 'Main Street',
      category: 'Asian',
      image: 'http://via.placeholder.com/350x250',
      diners: 12,
      description: 'Yum yum yummy',
      rate: 35,
      status: 'Open',
      createdAt: '12/24/2018'
    }
  ];

  constructor() {}

  ngOnInit() {}
}