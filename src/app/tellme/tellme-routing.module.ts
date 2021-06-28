import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TellmePage } from './tellme.page';

const routes: Routes = [
  {
    path: '',
    component: TellmePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TellmePageRoutingModule {}
