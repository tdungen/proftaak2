import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DivergentPage } from './divergent.page';

const routes: Routes = [
  {
    path: '',
    component: DivergentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DivergentPageRoutingModule {}
