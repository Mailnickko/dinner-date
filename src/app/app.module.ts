import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header.component';
import { DinnerComponent } from './dinner/dinner.component';

import { DinnerModule } from './dinner/dinner.module';

const routes: Routes = [{ path: '', redirectTo: '/dinners', pathMatch: 'full' }];

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), DinnerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
