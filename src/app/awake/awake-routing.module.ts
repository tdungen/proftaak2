import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AwakePage } from './awake.page';

const routes: Routes = [
  {
    path: '',
    component: AwakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AwakePageRoutingModule {}
