import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmyofdeadPage } from './armyofdead.page';

const routes: Routes = [
  {
    path: '',
    component: ArmyofdeadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmyofdeadPageRoutingModule {}
