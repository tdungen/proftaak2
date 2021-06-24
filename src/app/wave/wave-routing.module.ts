import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WavePage } from './wave.page';

const routes: Routes = [
  {
    path: '',
    component: WavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WavePageRoutingModule {}
