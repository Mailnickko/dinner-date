import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dinner } from './dinner.model';

@Injectable()
export class DinnerService {
  private dinners: any[] = [
    {
      id: '1',
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
      id: '2',
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
      id: '3',
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

  public getDinnerById(dinnerId: string): Observable<Dinner> {
    return new Observable<Dinner>(observer => {
      setTimeout(() => {
        const foundDinner = this.dinners.find(dinner => dinner.id === dinnerId);
        observer.next(foundDinner);
      }, 100);
    });
  }

  public getDinners(): Observable<Dinner[]> {
    const dinnerObservable: Observable<Dinner[]> = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.dinners);
      }, 2000);
    });
    return dinnerObservable;
  }
}
