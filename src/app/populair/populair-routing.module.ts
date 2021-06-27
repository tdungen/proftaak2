import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopulairPage } from './populair.page';

const routes: Routes = [
  {
    path: '',
    component: PopulairPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopulairPageRoutingModule {}
