import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeverlandPage } from './neverland.page';

const routes: Routes = [
  {
    path: '',
    component: NeverlandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeverlandPageRoutingModule {}
