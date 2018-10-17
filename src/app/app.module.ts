import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header.component';
import { DinnerComponent } from './dinner/dinner.component';
import { DinnerListComponent } from './dinner/dinner-list/dinner-list.component';
import { DinnerListItemComponent } from './dinner/dinner-list-item/dinner-list-item.component';

const routes: Routes = [{ path: '', component: DinnerComponent }];

@NgModule({
  declarations: [AppComponent, HeaderComponent, DinnerComponent, DinnerListComponent, DinnerListItemComponent],
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
