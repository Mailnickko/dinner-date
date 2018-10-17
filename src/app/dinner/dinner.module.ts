import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinnerComponent } from './dinner.component';
import { DinnerListComponent } from './dinner-list/dinner-list.component';
import { DinnerListItemComponent } from './dinner-list-item/dinner-list-item.component';

import { DinnerService } from './shared/dinner.service';

@NgModule({
  declarations: [DinnerComponent, DinnerListComponent, DinnerListItemComponent],
  imports: [CommonModule],
  providers: [DinnerService]
})
export class DinnerModule {}
