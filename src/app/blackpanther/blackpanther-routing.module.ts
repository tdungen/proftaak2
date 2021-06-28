import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlackpantherPage } from './blackpanther.page';

const routes: Routes = [
  {
    path: '',
    component: BlackpantherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlackpantherPageRoutingModule {}
