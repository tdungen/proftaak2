import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GreenlandPage } from './greenland.page';

const routes: Routes = [
  {
    path: '',
    component: GreenlandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GreenlandPageRoutingModule {}
