import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmyofdeadPageRoutingModule } from './armyofdead-routing.module';

import { ArmyofdeadPage } from './armyofdead.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmyofdeadPageRoutingModule
  ],
  declarations: [ArmyofdeadPage]
})
export class ArmyofdeadPageModule {}
