import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputVisitorDetailsComponent } from './input-visitor-details/input-visitor-details.component';
import { RequestQueueNumberComponent } from './request-queue-number/request-queue-number.component';
import { VisitorListComponent } from './visitor-list/visitor-list.component';

const routes: Routes = [
  {
    path: 'request-queue-number', component: RequestQueueNumberComponent
  },
  {
    path: 'input-visitor-details', component: InputVisitorDetailsComponent
  },
  {
    path: 'visitor-list', component: VisitorListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
