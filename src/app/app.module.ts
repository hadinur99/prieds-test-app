import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputVisitorDetailsComponent } from './input-visitor-details/input-visitor-details.component';
import { MenuComponent } from './menu/menu.component';
import { RequestQueueNumberComponent } from './request-queue-number/request-queue-number.component';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { MaterialModule } from '../app/tools/material.module';

@NgModule({
  declarations: [
    AppComponent,
    InputVisitorDetailsComponent,
    MenuComponent,
    RequestQueueNumberComponent,
    VisitorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    MaterialModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF, useValue: '/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
