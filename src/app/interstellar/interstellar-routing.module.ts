import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterstellarPage } from './interstellar.page';

const routes: Routes = [
  {
    path: '',
    component: InterstellarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterstellarPageRoutingModule {}
