import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinnerComponent } from './dinner.component';
import { DinnerListComponent } from './dinner-list/dinner-list.component';
import { DinnerListItemComponent } from './dinner-list-item/dinner-list-item.component';

@NgModule({
  declarations: [DinnerComponent, DinnerListComponent, DinnerListItemComponent],
  imports: [CommonModule]
})
export class DinnerModule {}
