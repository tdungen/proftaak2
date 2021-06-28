import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LionkingPage } from './lionking.page';

const routes: Routes = [
  {
    path: '',
    component: LionkingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LionkingPageRoutingModule {}
