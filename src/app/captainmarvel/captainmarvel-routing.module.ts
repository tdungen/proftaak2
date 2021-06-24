import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaptainmarvelPage } from './captainmarvel.page';

const routes: Routes = [
  {
    path: '',
    component: CaptainmarvelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaptainmarvelPageRoutingModule {}
