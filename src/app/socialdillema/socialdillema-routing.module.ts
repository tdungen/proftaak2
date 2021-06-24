import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialdillemaPage } from './socialdillema.page';

const routes: Routes = [
  {
    path: '',
    component: SocialdillemaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialdillemaPageRoutingModule {}
