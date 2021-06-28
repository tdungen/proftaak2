import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoyagerPage } from './voyager.page';

const routes: Routes = [
  {
    path: '',
    component: VoyagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoyagerPageRoutingModule {}
