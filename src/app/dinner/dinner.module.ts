import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DinnerComponent } from './dinner.component';
import { DinnerListComponent } from './dinner-list/dinner-list.component';
import { DinnerListItemComponent } from './dinner-list-item/dinner-list-item.component';

import { DinnerService } from './shared/dinner.service';
import { DinnerDetailComponent } from './dinner-detail/dinner-detail.component';

const routes: Routes = [
  {
    path: 'dinners',
    component: DinnerComponent,
    children: [
      {
        path: '',
        component: DinnerListComponent
      },
      {
        path: ':dinnerId',
        component: DinnerDetailComponent
      }
    ]
  }
];

@NgModule({
  declarations: [DinnerComponent, DinnerListComponent, DinnerListItemComponent, DinnerDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [DinnerService]
})
export class DinnerModule {}
